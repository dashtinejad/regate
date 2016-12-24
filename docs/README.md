If you are on windows, Install Jekyll by this tutorial:

```
https://labs.sverrirs.com/jekyll/
```

Inside the `regate/site` folder:


# Local

```
$ chcp 65001
$ bundle install
$ bundle exec jekyll serve -w
```


# Generate website

```
$ bundle exec jekyll build -d ../docs
```