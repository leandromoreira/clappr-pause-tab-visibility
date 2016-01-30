[![license](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)
# Clappr pause/resume on tab change visibility

A [clappr](https://github.com/clappr/clappr) container plugin to pause when user is in another tab and resume when the user is back.

You can optionally show an icon to indicate its state.

```javascript
{
  visibilityEnableIcon: true
}
```

# Usage

```html
<div id="player"></div>
  <script>
    var player = new Clappr.Player({
      parentId: '#player',autoPlay:true, mute: true,
      plugins: [ClapprPauseTabVisibility],
      source: 'http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_5mb.mp4',
      height: 360,
      width: 640,
      visibilityEnableIcon: true
    })
  </script>
```

# Development

Install dependencies:

`npm install`

Build:

`npm run build`

Run:

`npm start`

