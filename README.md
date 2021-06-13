Those digging this far will want to [read this site's code](https://github.com/4richardchen/4richardchen.github.com/commits/master) and [run this site locally](https://github.com/Starefossen/docker-github-pages) (or more easily, view [its deployed version](https://4richardchen.github.io)).

To share some secret or to keep it handier or in case it gets removed, the command is:
```
docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```
