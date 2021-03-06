#!/bin/bash
#* author codeleeter@gmail.com

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo -t forty # if using a theme, replace with `hugo -t <YOURTHEME>`

# minify all files in dist floder
gulp

echo '✅压缩工作已完成!!!'

# Go To Public folder
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..
