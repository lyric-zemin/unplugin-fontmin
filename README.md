# unplugin-fontmin

[![NPM version](https://img.shields.io/npm/v/unplugin-fontmin?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-fontmin)

🔣 Auto minify font in build.

## Install

```bash
npm i unplugin-fontmin
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Fontmin from 'unplugin-fontmin/vite'

export default defineConfig({
  plugins: [
    Fontmin({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Fontmin from 'unplugin-fontmin/rollup'

export default {
  plugins: [
    Fontmin({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-fontmin/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-fontmin/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-fontmin/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import Fontmin from 'unplugin-fontmin/esbuild'

build({
  plugins: [Fontmin()],
})
```

<br></details>
