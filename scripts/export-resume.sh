#!/bin/bash

set -e

RESUME_TYPE=$1
FILENAME="resume-$RESUME_TYPE.pdf"

rm -f "$FILENAME"

_initialDocURLs="$WEBPAGE_URL/docs/resume/$RESUME_TYPE"
_contentSelector="article"
_excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page,.slick-slider"
_paginationSelector=".no-pagination"
_outputPDFFilename="docs-to-pdf-$RESUME_TYPE.pdf"
_paperFormat="A4"
# _pdfMargin="100,100,100,100"

_cssStyle="""
h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem !important;
}

h4:before { 
  content: '=>'; /* Emojis are not supported in PDF, so we use arrows instead */
  margin-right: 0.5rem; 
  color: var(--ifm-color-warning); 
} 

details, /* Hide details as they occupy too much space */
.markdown > header:first-child, /* Hide page title */
nav:first-child, /* Hide breadcrumbs */
.theme-admonition-tip:first-child { /* Hide download resume button in resume */
  display: none; 
}

li {
  font-size: 0.65rem;
}

.metadata-tags span { /* Smaller tags */
  font-size: 0.1rem;
  line-height: 0.75;
  padding: 0.2rem 0.4rem;
}

.theme-admonition {
  box-shadow: unset; /* Remove shadow from admonitions */
}

.me-in-a-nutshell-item {
  box-shadow: unset; /* Remove shadow from nutshell items */
  border: 1px solid var(--ifm-color-emphasis-200); /* Add border instead */
}
"""

echo "Exporting resume to $FILENAME..."

npx docs-to-pdf \
  --initialDocURLs="$_initialDocURLs" \
  --contentSelector="$_contentSelector" \
  --excludeSelectors="$_excludeSelectors" \
  --paginationSelector="$_paginationSelector" \
  --cssStyle="$_cssStyle" \
  --outputPDFFilename="$_outputPDFFilename" \
  --paperFormat="$_paperFormat" \
  --disableTOC

echo "Removing first pages..."

sudo apt-get install -y qpdf

qpdf --empty --pages "$_outputPDFFilename" 2-z -- "$FILENAME"

echo "Uploading $FILENAME to GitHub..."

# Repository information
OWNER="01Joseph-Hwang10"
REPO="$OWNER.github.io"
BRANCH="gh-pages"

# Path to the PDF file you want to upload
PDF_PATH="$FILENAME"

# Commit message
COMMIT_MESSAGE="Update $FILENAME"

# Upload PDF content as a blob
BLOB_SHA=$(curl -X POST -H "Authorization: token $TOKEN" \
  -d "{\"content\":\"$(base64 -w 0 $PDF_PATH)\"}" \
  "https://api.github.com/repos/$OWNER/$REPO/git/blobs" | jq -r '.sha')

BASE_TREE=$(curl -H "Authorization: token $TOKEN" \
  "https://api.github.com/repos/$OWNER/$REPO/git/refs/heads/$BRANCH" | jq -r '.object.sha')

# Create a new tree with the blob
TREE_SHA=$(curl -X POST -H "Authorization: token $TOKEN" \
  -d "{\"base_tree\":\"$BASE_TREE\",
  \"tree\":[{\"path\":\"$PDF_PATH\",\"mode\":\"100644\",\"type\":\"blob\",\"sha\":\"$BLOB_SHA\"}]}" \
  "https://api.github.com/repos/$OWNER/$REPO/git/trees" | jq -r '.sha')

PARENT=$(curl -H 'Authorization: token $TOKEN' \
  "https://api.github.com/repos/$OWNER/$REPO/git/refs/heads/$BRANCH" | jq -r '.object.sha')

# Create a new commit
COMMIT_SHA=$(curl -X POST -H "Authorization: token $TOKEN" \
  -d "{\"message\":\"$COMMIT_MESSAGE\",\"tree\":\"$TREE_SHA\",
  \"parents\":[\"$PARENT\"]}" \
  "https://api.github.com/repos/$OWNER/$REPO/git/commits" | jq -r '.sha')

# Update the branch reference to point to the new commit
curl -X PATCH -H "Authorization: token $TOKEN" \
  -d "{\"sha\":\"$COMMIT_SHA\"}" \
  "https://api.github.com/repos/$OWNER/$REPO/git/refs/heads/$BRANCH"

rm "$_outputPDFFilename"
