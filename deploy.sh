#!/bin/bash

# Build the site
bundle exec jekyll build

# Create and switch to the gh-pages branch
git checkout -b gh-pages

# Remove all files from git tracking except _site
git rm -rf .
git clean -fxd

# Move contents of _site to root
mv _site/* .
rm -rf _site

# Create .nojekyll file
touch .nojekyll

# Add all files, commit, and push
git add .
git commit -m "Deploy built site"
git push origin gh-pages

# Switch back to the main branch
git checkout main