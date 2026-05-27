# Develop

```sh
# config git, overwrite target file
mv .gitconfig .git/config
# config git, keep target file info i.e. branch info
cat  .gitconfig >> .git/config

# if you overwrite branch info, restore it
git fetch

# add signing key
open https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification

# normal setup
npm i --no-package-lock && npm run dev

# push (and afterwards, the ssh stays)
GIT_SSH_COMMAND="ssh -i ~/.ssh/yourfilehere -o IdentitiesOnly=yes" git push
```