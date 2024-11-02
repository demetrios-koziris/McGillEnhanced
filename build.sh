#!/bin/bash
set -e

show_help() {
    cat << EOF
Usage:
  $ ./build.sh [options] [<platform>...]

Options:
  -b  Build as BETA version
  -c  Clear the /out directory before building
  -h  Show help message

Platform:
  chrome   Web extension compatible with Chrome (published on Chrome Web Store)
  firefox  Web extension compatible with Firefox (published on Mozilla Add-ons site)
           If no platforms are specified, the script will build for both platforms

Examples:
  $ ./build.sh
  $ ./build.sh -c
  $ ./build.sh chrome
  $ ./build.sh chrome -b
  $ ./build.sh firefox
EOF
    exit 0
}

# Handle options
CLEAN_BUILD=0
BUILD_BETA=0
while getopts "bch" opt; do
  case "$opt" in
    b)
      BUILD_BETA=1
      ;;
    c)
      CLEAN_BUILD=1
      ;;
    h)
      show_help
      ;;
    *)
      show_help
      ;;
  esac
done
shift $((OPTIND -1))

# Set default platforms if none specified
if [ "$#" -lt 1 ]; then
  echo "$0: Building all platforms since no platform was specified"
  set -- "chrome" "firefox"
fi

MANIFEST_FILE='src/manifest.json'
BUILD_DIR='out'
ZIP_ARGS=("css" "images" "js" "lib" "menu" "manifest.json")
today=$(date '+%Y.%m.%d_%H.%M.%S')
version=$(grep '"version":' "$MANIFEST_FILE" | grep -o '[0-9]\+\(\.[0-9]\+\)\+')

# Clean build directory if requested
if [ "$CLEAN_BUILD" -eq 1 ]; then
  echo "$0: Clearing $BUILD_DIR directory"
  rm -rf "$BUILD_DIR"
fi

mkdir -p "$BUILD_DIR"

# Build extension for each specified platform
for platform in "$@"; do

  if [ "$platform" != "chrome" ] && [ "$platform" != "firefox" ]; then
    echo "$0: Invalid platform: $platform"
    show_help
    continue
  fi

  buildname="McGillEnhanced_v${version}__${today}__${platform}"
  if [ "$BUILD_BETA" -eq 1 ]; then
    buildname="${buildname}_BETA"
  fi
  echo "$0: Creating $platform version in $BUILD_DIR/$buildname.zip"

  MODIFICATIONS=0
  # If modification needed, create a backup of the manifest
  if [ "$platform" == "firefox" ] || [ "$BUILD_BETA" -eq 1 ]; then
    MODIFICATIONS=1
    cp "$MANIFEST_FILE" "$MANIFEST_FILE.bak"
  fi

  if [ "$platform" == "firefox" ]; then
    sed -i '' '1s/{/{\n  "browser_specific_settings": {"gecko": {"id": "{fbd3b601-613b-4747-a92b-4d37b2fd7667}"}},/' "$MANIFEST_FILE"
  	sed -i '' 's/"service_worker": "js\/serviceWorker.js"/"scripts": ["js\/serviceWorker.js"]/g' "$MANIFEST_FILE"
  fi

  if [ "$BUILD_BETA" -eq 1 ]; then
    sed -i '' 's/"description": "Enhance the functionality of McGill\.ca"/"description": "THIS EXTENSION IS FOR BETA TESTING. Enhance the functionality of McGill.ca"/g' "$MANIFEST_FILE"
    sed -i '' 's/"name": "McGill Enhanced"/"name": "McGill Enhanced BETA"/g' "$MANIFEST_FILE"
  fi

  # zip from within src so that manifest is at root of zip rather than in at src/manfiest 
  # (manifest being at root is requried for firefox)
  (cd src && zip -rq "../$BUILD_DIR/$buildname.zip" "${ZIP_ARGS[@]}" -x "*.bak")

  # Restore the original manifest if it was modified
  if [ "$MODIFICATIONS" -eq 1 ]; then
    mv -f "$MANIFEST_FILE.bak" "$MANIFEST_FILE"
    rm -f "$MANIFEST_FILE.bak"
  fi

done
