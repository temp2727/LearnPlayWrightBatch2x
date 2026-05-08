#!/bin/sh
# Auto-generate README repository structure before commit
# Copy this file to .git/hooks/pre-commit to enable the hook

node scripts/generate-readme-toc.js

# Stage the updated README if it changed
git add README.md
