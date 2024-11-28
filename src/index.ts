import { resolve } from 'node:path'
import { cwd } from 'node:process'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import Fontmin from 'fontmin'
import type { Options } from './types'
import { readText } from './utils/readText'

const defaultOptions = {
  suffixes: ['ttf'],
  outputDir: 'dist',
}

export const unpluginFactory: UnpluginFactory<
  Options | undefined
> = (options) => {
  const { suffixes, outputDir } = { ...defaultOptions, ...options }
  const resolvedOutputDir = resolve(cwd(), outputDir)

  return {
    name: 'unplugin-fontmin',

    async writeBundle() {
      const text = await readText(resolvedOutputDir)
      const fontmin = new Fontmin()
        .src(`${outputDir}/**/*.{${suffixes.join(',')}}`) // 这里glob(**)匹配的目录会被同步写入dest
        .dest(resolvedOutputDir)

      // if (suffixes.includes('otf'))
      //   fontmin.use(Fontmin.otf2ttf())

      fontmin.use(Fontmin.glyph({ text }))

      await fontmin.runAsync()
    },

    vite: {
      apply: 'build',
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
