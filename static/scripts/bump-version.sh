#!/bin/bash

# Stop if there's any error
set -e

# Set git config
git config --local user.email "actions@github.com"
git config --local user.name "Github Actions"

# Version bump
npm run version
