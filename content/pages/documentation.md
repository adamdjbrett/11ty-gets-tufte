---
title: Documentation
description: Tutorial and Documentation how to use 11ty gets Tufte
show_toc: true
permalink: /doc/
---

---
## Installation
---

Need to download Node Js , [Download Node Here](https://nodejs.org/en/download)

Download Source Code Project - [Download 11ty gets Tufte](https://github.com/adamdjbrett/11ty-gets-tufte/archive/refs/heads/main.zip)

or Clone / Fork this Projects `git clone https://github.com/adamdjbrett/11ty-gets-tufte.git`

---
## Run 11ty Gets Tufte
---

Open your download folder and extract in to your project folder, open terminal and run this command `npm install`

Next you can run this project on your local devices , run this command `npm start`

Now you can open `http://localhost:8080` on your web browser.

---
## Configuration
---

For the initial setup, go to `_data/metadata.js`

Then set it according to your needs, such as title, description, and others.

Next, after making the settings, you are now ready to update your site.

---
## Home Page
---

To update the main page, go to `content/index.md` and change it to suit your needs.

---
## Static Page
---

To create a static page, you can access `content/page` and create a new markdown file there, for example `privacy.md` then create a frontmatter with the concept as below.

```
---
title: This is my title
description: My description in here...
---
Write your content article.......
```

---
## Blog Dynamic Page
---

To create a dynamic page, for example a blog article, access `content/blog` and create a new markdown file there, for example `this-is-article.md` then create a frontmatter with the following concept:

```
---
title: This is my title
description: My description in here...
date: 2025-01-09
tags: 
 - hello
 - world
---
Write your content article.......
```

---
## Section
---

Sections are used to provide wider spacing between articles on one markdown file, you can add them by adding `<section>`. to each area of ​​the article you want.

Example: 

```
<section>
Write your article in here....
</section>

<section>
Write your others article in here....
</section>

```

---
## Shortcode
---

This project is also equipped with shortcodes for ease of work. Learn the types of shortcodes that you can use to support your project.

---
### Epigraph
---

{% epigraph "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'"%}

To create epigraph, you need to use a shortcode ,to make you can simply paste into your markdown article.

Implementation example for epigraph:

```
{% raw %}
{% epigraph "Hello this is content area" , "And this is footer area" %}
{% endraw %}
```

Information:
+ `Hello this is content area` Write your content on this area.
+ `And this is footer area` this footnote area.

HTML Code look like this

```
{% epigraph "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'"%}
```

You can see the demo on `content/blog/epigraph.md` or [on this page](/blog/epigraph)

---
### Epigraph with URL Link
---

{% epigraphlink "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'" , "Click Me" , "https://adamdjbrett.com"%}

To create epigraph, you need to use a shortcode ,to make you can simply paste into your markdown article.

Implementation example for epigraph:

```
{% raw %}
{% epigraphlink "Hello this is content area" , "And this is footer area" , "Text for URL" , "http://example.com"%}
{% endraw %}
```

Information:
+ `Hello this is content area` Write your content on this area.
+ `And this is footer area` this footnote area.
+ `Text for URL` this text URL area.
+ `http://example.com` insert domain url.

HTML Code look like this

```
{% epigraphlink "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'" , "Click Me" , "https://adamdjbrett.com"%}
```

You can see the demo on `content/blog/epigraph-link.md` or [on this page](/blog/epigraph-link)

---
### Blockquote
---

{% blockquote "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'"%}

To create blockquote, you need to use a shortcode ,to make you can simply paste into your markdown article.

Implementation example for blockquote:

```
{% raw %}
{% blockquote "Hello this is content area" , "And this is footer area" %}
{% endraw %}
```

Information:
+ `Hello this is content area` Write your content on this area.
+ `And this is footer area` this footer area.

HTML Code look like this

```
{% blockquote "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'"%}
```

You can see the demo on `content/blog/blockquote.md` or [on this page](/blog/blockquote)

---
### Blockquote with URL Link
---

{% blockquotelink "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'" , "Click Me" , "https://adamdjbrett.com"%}

To create blockquote with URL Link, you need to use a shortcode ,to make you can simply paste into your markdown article.

Implementation example for blockquote with link:

```
{% raw %}
{% blockquotelink "Hello this is content area" , "And this is footer area" , "Text url link info" , "https://example.com" %}
{% endraw %}
```

Information:
+ `Hello this is content area` Write your content on this area.
+ `And this is footer area` this footer area.
+ `Text url link info` this text url link information area.
+ `And this is footer area` url link in here.

HTML Code look like this

```
{% blockquotelink "The English language . . . becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts." , "George Orwell, 'Politics and the English Language'" , "Click Me" , "https://adamdjbrett.com"%}
```

You can see the demo on `content/blog/blockquote-link.md` or [on this page](/blog/blockquote-link)

---
### Notes
---

{% notes "1s", "This is a example for notes features."%}

To create notes, you need to use a shortcode ,to make you can simply paste into your markdown article.

Implementation example for notes:

```
{% raw %}
{% notes "1s", "This is a margin note. Notice there isn’t a number preceding the note." %}
{% endraw %}
```

PS: Do not use the same ID's in one article

Information:
+ `1s` is your id you can fill in the id there.
+ `This is a margin note....` this is the content for the notes area.

HTML Code

```
{% notes "1s", "This is a example for notes features."%}
```

You can see the demo on `content/blog/notes-example.md` or [on this page](/blog/notes-example)

---
### Side Notes
---

{% sidenote "1b","Title Side Notes" ,"Side Notes Information", "This is a example content article for your side notes features." %}

To create sidenotes, you need to use a shortcode that you can simply paste into your markdown article.

Implementation example for sidenotes:

```
sidenote "1b","Title" ,"Side Notes Info", "Content in here.." 
```

Information: 
+ `1b` is your id you can fill in the id there.
+ `Title` this is the title for your side notes.
+ `Side Notes Info` this is the title for your side notes info on the right side.
+ `Content in here..` this is the content of your sidenotes article.

PS: Do not use the same ID's in one article

HTML Code

```
{% sidenote "1b","Title Side Notes" ,"Side Notes Information", "This is a example content article for your side notes features." %}
```

You can see the demo on `content/blog/side-notes-example.md` or [on this page](/blog/side-notes-example)

---
### Side Notes Internal Link
---

{% sidenoteinternal "1ab","Title Side Notes Internal Link" ,"Side Notes Internal Link Information", "This is a example content article for your side notes internal link features." %}

To create sidenotes internal link with id link same like table of content, you need to use a shortcode that you can simply paste into your markdown article.

Implementation example for sidenotes with internal link:

```
{% raw %}
{% sidenoteinternal "1bas","Title" ,"Side Notes Info", "Content in here.." %}
{% endraw %}
```

Information: 
+ `1b` is your id you can fill in the id there.
+ `Title` this is the title for your side notes.
+ `Side Notes Info` this is the title for your side notes info on the right side.
+ `Content in here..` this is the content of your sidenotes article.

PS: Do not use the same ID's in one article

HTML Code

```
{% sidenoteinternal "1ab","Title Side Notes" ,"Side Notes Information", "This is a example content article for your side notes features." %}
```

You can see the demo on `content/blog/side-notes-internal.md` or [on this page](/blog/side-notes-internal)


---
### Side Notes External Link
---

{% sidenoteexternal "1db","Title Side Notes External Link" ,"Side Notes External Link Information", "This is a example content article for your side notes External link features." , "Click me to external link" , "https://youtube.com"%}

To create sidenotes external link , you need to use a shortcode that you can simply paste into your markdown article.

Implementation example for sidenotes with external link:

```
{% raw %}
{% sidenoteexternal "1dcs","Title" ,"Side Notes Info", "Content in here.." , "Text for url" , "https://www.example.com" %}
{% endraw %}
```

Information: 
+ `1b` is your id you can fill in the id there.
+ `Title` this is the title for your side notes.
+ `Side Notes Info` this is the title for your side notes info on the right side.
+ `Content in here..` this is the content of your sidenotes article.
+ `Text for url` Text for url link example click me
+ `https://www.example.com` your url link

PS: Do not use the same ID's in one article

HTML Code

```
{% sidenoteexternal "1db","Title Side Notes External Link" ,"Side Notes External Link Information", "This is a example content article for your side notes External link features." , "Click me to external link" , "https://youtube.com"%}
```

You can see the demo on `content/blog/side-notes-external.md` or [on this page](/blog/side-notes-external)

---
### Notes with Image
---

{% notesimage "2s", "/img/090-Subatomic Particles.png" , "alt of image" , "This is example of Sub atomic particles via image quilt via http://imagequilts.com/ "%}

To create notes with images, you can use the shortcode as below, and paste it into your markdown article.

```
{% raw %}
{% notesimage "2s", "/img/myimage.png" , "alt of image" , "content in here..." %}
{% endraw %}
```

Information: 
+ `2s` is the id, you can fill in the id there.
+ `/img/myimage.png` is the image file you want to use in the image notes.
+ `alt image` this is the alt image for your SEO needs.
+ `content in here...` enter content in this area.

PS: Do not use the same ID's in one article

HTML Code

```
{% notesimage "2s", "/img/myimage.jpg" , "alt of image" , "This is example notes with images "%}
```

You can see the demo on `content/blog/notes-image.md` or [on this page](/blog/notes-image)

---
### Standard Image
---

![George Vantongerloo via image quilt](/img/vantongerloo-2.png)

*George Vantongerloo via image quilt http://imagequilts.com/*

To use standard images, you can insert the normal image format into the article markdown. An example is as follows:

`![alt image](/img/myimage.png)`

You can see the demo on `content/blog/image-and-fullimage.md` or [on this page](/blog/image-and-fullimage)

---
### Full Image
---

{% fullimage "/img/vantongerloo-2.png", "full image" %}

If you want to use a full image, you can use a shortcode with the following format:


```
{% raw %}
{% fullimage "/img/myimage.png", "alt image" %}
{% endraw %}
```

Information:
+ `img/myimage.png` is your image file
+ `alt image` is the alt caption for your image.

HTML Code

```
{% fullimage "/img/myimage.jpg", "full image" %}
```

You can see the demo on `content/blog/notes-image.md` or [on this page](/blog/image-and-fullimage)

---
### Video
---

If you need to embed a video then you can use the following shortcode.

```
{% raw %}
{% videos "https://www.youtube.com/embed/hJGaMGmuZEc" , "title of your video" %}
{% endraw %}
```

Information:
+ `https://example.com` enter your video URL in this area.
+ `title of your video` this is for your video title.

HTML Code

```
{% videos "https://www.youtube.com/embed/Q3t5lzvpBdE" , "title of your video" %}
```

You can see the demo on `content/blog/video.md` or [on this page](/blog/video)

---
## Build for Production
---

If you want to deploy your site you can run build production command in to your host, run `npm run build`

+ For PHP host , you can upload your build production `_site` folder in to your domain.
+ For modern static host you can create new project in to netlify, vercel or cloudflare and connect with your github repo project and deploy it.

---
## Need Help ??
---

If you need help or want to consult about your project, don't hesitate to contact me.

Developer : [Adam DJ Brett](https://adamdjbrett.com)
Website: [www.adamdjbrett.com](https://adamdjbrett.com)
Email: [info@adamdjbrett.com](mailto:info@adamdjbrett.com)
