# SmoothTab

The goal of this project is to provide a nicer-looking and animated replacement for the browser-native accessibility outline. Pressing tab in the browser will cause the outline smoothly move to the new position. 

Since this reticle is overlaid on top of the entire page, it should not ever have a segment that appears cut off. A smooth animation will help the user track the position of the reticle as it is changing. The reticle styles can be overridden easily using CSS.

![SmoothTab in action](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTRweTk4MjlrcmxtNHZrZnp4NnhmNmNhZzRmdnU1eGE4bG5xeXFkdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2NaTKU7Z4Ou8uCXPuW/source.gif)

## Features

- Animates the reticle between focusable elements when pressing tab or clicking.
- Resizes the reticle to cover the extents of the focused element
- Keeps the reticle on top of the focused element when scolling.

## Installation

### Using NPM

```bash
$ npm install smooth-tab
```

```javascript
import SmoothTab from 'smooth-tab';
import './styles.css' from 'smooth-tab';

new SmoothTab().init();
```

### Directly In Browser Using CDN and ESM

```html
<head>
    ...
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smooth-tab@latest/dist/style.css">

    <script type="module"> 
        import smooth-tab from 'https://cdn.jsdelivr.net/npm/smooth-tab@latest/+esm';
        
        new SmoothTab().init();
    </script>
    ...
</head>
```

## Development

You can get involved in development for this project! Feel free to submit issues and start a discussion. This project is in its infancy and is not feature complete, fully accessible, or tested.

Start the development environment with:

```bash
# pnpm
$ pnpm install
$ pnpm dev

# npm
$ npm install
$ npm run dev
```
