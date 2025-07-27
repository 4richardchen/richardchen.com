Configure git

```sh
mv .gitconfig .git/config
```

Add [signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification)

[Run site locally](//github.com/Starefossen/docker-github-pages) on linux/amd64 a.k.a. non-Intel non-Apple Silicon:

```sh
docker run -it -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```

Solve for Apple Silicon is to add the `platform` flag:

```sh
docker build --platform linux/amd64 -t ghp starefossen/github-pages
docker run -it -v "$PWD":/usr/src/app -p "4000:4000"  --platform linux/amd64 ghp
```