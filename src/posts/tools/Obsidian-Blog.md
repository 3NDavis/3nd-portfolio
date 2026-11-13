---
title: Obsidian Blog
description:
published: false
highlight: false
priority: -1
backgroundColor: "#350A0CCC"
borderColor: "#FD763FFF"
titleColor: "#FD763FFF"
textColor: "#FD763FFF"
iconsrc:
iconAltText: icon
skills:
  - Svelte
  - JavaScript
  - Obsidian
---
When making this site I wanted to be able to create content for it in an intuative way. I did not want to make a new HTML page for every entry, I also did not want to use JSON, or JS files since they are not that intuative to write in.

I settled on using Markdown and using the sveltekit plugin mdsvex to be able to read the mark down files.

To make the process even better I decided to use Obsidian to edit the markdown files. This allowed me to make templates and apply custom script if I wanted and see a rough preview much faster.

I ended up using a template to add a parameters at the top of every on of my blogs that allows me to control how it appears on the site.
- Title
- Description
- Published
- Highlight
- Priority
- Colors for background and text
- hero icon and alttext
- skills used for the blog


I also have some modifications to my obsidian so that whenever I use a hyperlink `[Text](Link)`, or embedded image `[Img]`, it switches the HTML version `<a href="Link">Text</a>` and `<img src="Img" alt="img">` respectively. Since the markdown version breaks the webpage.