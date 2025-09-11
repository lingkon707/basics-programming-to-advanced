Sub: Complex Git & GitHub Situations with Solutions

1. Accidentally committed wrong changes

Situation: You added a file or made a commit by mistake.
Solution:

# undo last commit but keep changes
git reset --soft HEAD~1

# undo last commit and discard changes
git reset --hard HEAD~1

2. Pushed wrong commit to GitHub

Situation: You pushed something bad to remote.
Solution:

# rewrite history locally
git reset --hard HEAD~1

# force push to remote
git push origin branch-name --force

3. Want to undo a single commit in middle of history

Situation: Need to keep history but remove commit effects.
Solution:

git revert <commit-hash>

4. Stuck in a merge conflict

Situation: Git shows conflict markers (<<<<<<< >>>>>>>).
Solution:

# open conflicted file, fix manually
git add file.txt
git commit


If you want to cancel merge:

git merge --abort

5. Branch is behind main and needs update

Situation: Your branch is old, main has new commits.
Solution:

git checkout your-branch
git pull origin main


Alternative (cleaner history):

git checkout your-branch
git fetch origin
git rebase origin/main

6. Mistyped branch name after creating

Situation: Wrong branch name created.
Solution:

git branch -m wrong-name correct-name

7. Deleted a branch by mistake

Situation: Local branch removed.
Solution:

git checkout -b branch-name origin/branch-name

8. Lost changes after reset or crash

Situation: Work gone but you committed earlier.
Solution:

git reflog
git checkout <commit-hash>

9. Commit too many small commits, want to squash

Situation: Clean up before merging.
Solution:

git rebase -i HEAD~5
# pick first, squash rest

10. Accidentally added large/secret file

Situation: Sensitive or huge file pushed.
Solution:

git filter-branch --tree-filter 'rm -f secret.txt' HEAD
git push origin --force