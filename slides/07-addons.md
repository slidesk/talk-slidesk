## ⚙️ Components

```js
/**
 * components/bird.mjs
 * Early Birds
 * usage: !‎bird(pseudo)
 */

const birdTemplate = (pseudo) => `
  <div class="bird">
    <img src="assets/communautes/${pseudo}.webp" alt="${pseudo}">
    <h3>${pseudo}</h3>
    <div class="sd-qrcode" data-url="https://github.com/${pseudo}" style="width: 200px"></div>
  </div>
`;

export default (data) => {
  let newData = data;
  [...newData.matchAll(/!bird\((.*)\)/g)].forEach((match) => {
    newData = newData.replace(match[0], birdTemplate(match[1]));
  });
  return newData;
};
```

## 📝 Templates .[#split]

[[left]]

templates/split/split.sdt
```xml
<sd-title />

<div class="split">
  <div class="left">
    <sd-left />
  </div>
  <div class="right">
    <sd-right />
  </div>
</div>

<sd-content />
```

[[/left]]

[[right]]

slide.sdf
```markdown
    ## Title .[#split]

    [[left]]

    left content

    [[/left]]

    [[right]]

    right content

    [[/right]]

    Bottom
```

[[/right]]
