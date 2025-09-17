
# Go to your project directory
cd path/to/my-project
____________________________

# Initialize Git (if not already initialized)
git init
____________________________

# Add all files to Git staging
git add .
____________________________

# Commit the changes
git commit -m "Initial commit"
____________________________

# Add the GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/lingkon707/my-project.git
____________________________

# Check your current branch name
git branch
# If it shows * master, use master in the next step
# If it shows * main, use main
____________________________

# Push to GitHub (using 'master' or 'main' as per your branch)
git push -u origin master
# or
# git push -u origin main
____________________________

# OPTIONAL: If you want to rename 'master' to 'main'
git branch -m master main
git push -u origin main

