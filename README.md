TODO App written in Typescript
===

Used: Typescript, Webpack(ts-loader + html-webpack-plugin)

Install
---

```bash
git clone https://github.com/iliyan-trifonov/todo-app-ts.git

npm install
````

Run
---

```bash
npm run build
```

Now in dist/ you have: index.html and the app.js bundle

Install static-server:

```bash
npm install -g static-server
```

Then run it like this:

```bash
static-server dist/
```

Open http://localhost:9080 and you'll see the app.

For continuous build while developing run(in 2 separate windows):

```bash
npm run watch
```

```bash
static server dist/
```