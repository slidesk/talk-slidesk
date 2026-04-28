## 📋 Cahier des charges .[steps]

- **langage simple** : basculé en markdown par la suite
- **inclusion de fichiers** : structure, puis répertoire
- **speaker_view**
- **modularité** : components, plugins, themes, templates
- **flexibilité** : code html, ...
- **watcher** : refresh auto
- **responsive** & "**green**"

## 🤗 À la base

c'est juste pour moi, mais repo ouvert

## Bun .[bun]

```bash
$ bun build ./index.ts --compile --outfile slidesk
```

## Cross-Compilation .[bun]

```bash
$ bun build --compile --target=bun-linux-x64 ./path/to/my/app.ts --outfile myapp
```

<hr style="margin: 20px" />

```bash
$ bun build --compile --target=bun-windows-x64 ./path/to/my/app.ts --outfile myapp
```

<hr style="margin: 20px" />

```bash
$ bun build --compile --target=bun-darwin-arm64 ./path/to/my/app.ts --outfile myapp
$ bun build --compile --target=bun-darwin-x64 ./path/to/my/app.ts --outfile myapp
```

## 📦 Installation ou Utilisation

```bash
$ brew install gouz/tools/slidesk
```

<hr style="margin: 20px" />

```bash
$ bunx slidesk
```

<hr style="margin: 20px" />

```bash
$ docker run -it -v "$(pwd)"/:/slidesk/ -p 1337:1337 gouz/slidesk:latest slidesk -tn
```
