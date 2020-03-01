# TheCallum

GatsbyJS Portfolio website

## About

TheCallum is my portfolio website. TheCallum is build using GatsbyJS, with the content hosted on Contentful.

Gatsby is a framework build with React. Gatsby is a Static Site Generator. You build your pages and components using React, and Gatsby then compiles this into static assets. 

Static sites are much faster than dynamics sites because each visitor receives the same static files. No further server-side code, database requests or dynamic rendering needs to take place. Static websites also can be cached very easily, or hosted on a CDN (Content Delivery Network).

I decided to use Gatsby because of it's speed. Because Gatsby compiles to static assets, the website can be hosted directly on any CDN, meaning it will load incredible fast. There are no additional trips to the database, once the user sends a request, they immediately get everything back.

All of the content is hosted on Contentful, which is a headless CMS. Whenever I update the content, Gatsby will compile all of the content. All of the hard work is done at compile-time, not when the user requests it.
