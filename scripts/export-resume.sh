#!/bin/bash

set -e

RESUME_TYPE=$1
FILENAME="resume-$RESUME_TYPE.pdf"

echo "[$FILENAME] Exporting resume to $FILENAME..."

rm -f "$FILENAME"

_initialDocURLs="$WEBPAGE_URL/docs/resume/$RESUME_TYPE"
_contentSelector="article"
_excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page,.slick-slider"
_outputPDFFilename="docs-to-pdf-$RESUME_TYPE.pdf"
_paginationSelector="h1" # Just a dummy selector to disable pagination
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

.theme-admonition {
  box-shadow: unset; /* Remove shadow from admonitions */
}

details, /* Hide details as they occupy too much space */
.markdown > header:first-child, /* Hide page title */
nav:first-child, /* Hide breadcrumbs */
.markdown > div.theme-admonition-tip:first-of-type { /* Hide download resume button in resume */
  display: none !important;
}

li,
.theme-admonition p,
.theme-admonition p a {
  font-size: 0.65rem;
}

.theme-admonition p {
  margin-bottom: 0.5rem;
}

.metadata-tags span { /* Smaller tags */
  font-size: 0.5rem;
  line-height: 1;
  padding: 0.125rem 0.25rem;
}

.me-in-a-nutshell-item {
  box-shadow: unset; /* Remove shadow from nutshell items */
  border: 1px solid var(--ifm-color-emphasis-200); /* Add border instead */
}
"""

npx docs-to-pdf \
  --initialDocURLs="$_initialDocURLs" \
  --contentSelector="$_contentSelector" \
  --excludeSelectors="$_excludeSelectors" \
  --paginationSelector="$_paginationSelector" \
  --cssStyle="$_cssStyle" \
  --outputPDFFilename="$_outputPDFFilename" \
  --paperFormat="$_paperFormat" \
  --disableTOC

echo "[$FILENAME] Removing first pages..."

qpdf --empty --pages "$_outputPDFFilename" 2-z -- "$FILENAME"

echo "[$FILENAME] Move file to appropriate directory..."

# Path to the PDF file you want to upload
FILEPATH="files/resume/$FILENAME"

mv "$FILENAME" "$FILEPATH"

echo "[$FILENAME] Cleaning up..."

rm "$_outputPDFFilename"
