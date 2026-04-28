## 🧐 Comment je faisais avant ? .[#split]

[[left]]

**asciidoc + asciidoctor**

```bash
# install ruby first
$ gem install asciidoctor
```

[[/left]]

[[right]]

**asciidoctor-revealjs**

```bash
# install node first
$ npm i --save asciidoctor @asciidoctor/reveal.js
```

[[/right]]

## ⚙️ Conversion

```js
/* Load Asciidoctor.js and the reveal.js converter */
var asciidoctor = require('@asciidoctor/core')()
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()

/* Convert the document 'presentation.adoc' using the reveal.js converter */
var options = { safe: 'safe', backend: 'revealjs' }
asciidoctor.convertFile('presentation.adoc', options)
```

<hr style="margin: 20px" />

```bash
# generate a presentation.html file
$ node convert-slides.js
```

## 📽️ Presentation

```bash
$ open presentation.html
```

## 🤯 Easy ? .[#mid-cover-left]

[[img]]

!image(assets/backgrounds/thiebaud-faix-ALsG3nt6EuQ-unsplash.webp)

[[/img]]
