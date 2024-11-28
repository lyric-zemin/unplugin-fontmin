import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { readDir, readText } from '../src/utils/readText'

const path = resolve(__dirname, './fixtures')

describe('readText', () => {
  it('readDir', async () => {
    const files = await readDir(path)
    expect(files).toMatchInlineSnapshot(`
      [
        Dirent {
          "name": "a.js",
          "parentPath": "D:\\private\\unplugin-fontmin\\test\\fixtures",
          "path": "D:\\private\\unplugin-fontmin\\test\\fixtures",
          Symbol(type): 1,
        },
        Dirent {
          "name": "b-1.js",
          "parentPath": "D:\\private\\unplugin-fontmin\\test\\fixtures\\b",
          "path": "D:\\private\\unplugin-fontmin\\test\\fixtures\\b",
          Symbol(type): 1,
        },
      ]
    `)
  })

  it('readText', async () => {
    const text = await readText(path)
    expect(text).toMatchInlineSnapshot(`
      "export const a = 1
      export const b = 'b'
      "
    `)
  })
})
