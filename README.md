# 11ty-1444

> ## Q: How can I serve collection from root? (blog)
> I'm moving my WP blog over to eleventy.
> I have a posts collection in /site/blog/post1/index.md and this is rendered as /dist/blog/post1/index.html.
> I would like yo serve it from the root of my site so it should become /dist/post1/index.htm.
> So like http://example.com/blog/post1.html should be http://example.com/post1.html actually.
> How can I do that?

## A: Create a [Data Directory File](https://www.11ty.dev/docs/data-template-dir/)
In this case, we can create a [site/blog/blog.json](site/blog/blog.json) config file and set a custom `permalink` property which will cascade to all the files in the site/blog/** directory.
