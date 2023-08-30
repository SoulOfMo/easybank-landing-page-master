# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/screenshot.jpeg)

### Links

- Solution URL: [Code](https://github.com/SoulOfMo/easybank-landing-page-master)
- Live Site URL: [Live Site](https://soulofmo.github.io/easybank-landing-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned
While continuing my journey of learning JavaScript, I utilized the project as an opportunity to refresh my understanding of CSS grid and various other CSS properties, such as the ::after pseudo-element and transform properties. These enabled me to create an underline hover effect.

code snippets, see below:

```css
li::after {
  content: "";
  width: 100%;
  position: absolute;
  transform: scaleX(0);
  height: 3px;
  bottom: -25px;
  left: 0;
  background: linear-gradient(270deg, var(--brightcyan), var(--limegreen));
  transform-origin: bottom center;
  transition: transform 0.25s ease-out;
}

li:hover::after {
  transform: scaleX(1);
  transform-origin: bottom center;
}
```

### Continued development

- Javascript

## Author

- Frontend Mentor - [@Soulofmo](https://www.frontendmentor.io/profile/SoulOfMO)
- Twitter - [@morin_sultan](https://www.twitter.com/morin_sultan)


## Acknowledgments

To myself for not giving up.
