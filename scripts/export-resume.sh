#!/bin/bash

# Raise error when any command fails
set -e

if [ "$1" == "--help" ] || [ $# -eq 0 ]
then
  echo "Usage: ./export-resume.sh <resume-url> [options]"
  echo ""
  echo "Options:"
  echo "  --help: Display this help message"
  echo "  --out-dir <dir>: Output directory. Defaults to 'files/resume'"
  echo "  --webpage-url <url>: URL of the webpage to export. If not defined, it will use '\$WEBPAGE_URL' environment variable"
  echo ""
  echo "Example: ./export-resume.sh frontend-agnostic"
  exit 1
fi

# Variable definitions
RESUME_URL=$1

# Remove first argument
shift

# Default values
OUT_DIR="files/resume"

# Iterate over all arguments
while [ $# -gt 0 ]; do
  case "$1" in
    --out-dir)
      OUT_DIR="$2"
      ;;
    --webpage-url)
      WEBPAGE_URL="$2"
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
  shift
  shift
done

# Replace ~ with $HOME if present
OUT_DIR=${OUT_DIR/#\~/$HOME}

# Replace slashes with dashes
RESUME_TYPE=${RESUME_URL//\//-}

FILENAME="resume-$RESUME_TYPE.pdf"

echo "[$FILENAME] Exporting resume to $FILENAME..."

rm -f "$FILENAME"

_initialDocURLs="$WEBPAGE_URL/docs/resume/$RESUME_URL"
_contentSelector="article"
_excludeSelectors=".margin-vert--xl a,[class^='tocCollapsible'],.breadcrumbs,.theme-edit-this-page,.slick-slider"
_outputPDFFilename="docs-to-pdf-$RESUME_TYPE.pdf"
_paginationSelector="h1" # Just a dummy selector to disable pagination
_paperFormat="A4"
# _pdfMargin="100,100,100,100"

_cssStyle="""
.markdown h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem !important;
}

.markdown h4:before { 
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
.theme-admonition a,
section.introduction p {
  font-size: 0.65rem;
}

.theme-admonition p,
section.introduction p {
  margin-bottom: 0.5rem;
}

.theme-admonition-note p {
  margin-bottom: 0;
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

rm "$_outputPDFFilename"

echo "[$FILENAME] Move file to appropriate directory..."

mv "$FILENAME" "$OUT_DIR"

