#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/public

git init
git add -A
git commit -m 'Nuevo Deploy'
git push -f git@github.com:Im-ZGhosty/docsclankyhosting.git master:gh-pages

cd -