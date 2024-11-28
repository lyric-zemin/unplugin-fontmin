import { rmdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { describe, expect, it } from 'vitest'
import Fontmin from 'fontmin'

describe('fontmin', () => {
  it('path nested', async () => {
    await rmdir(resolve(cwd(), 'test/output'), { recursive: true })
    const fontmin = new Fontmin()
    fontmin.src('test/**/*.{ttf,otf}').dest('test/output')
    fontmin.use(Fontmin.glyph({ text: 'hello' }))
    expect(await fontmin.runAsync()).toHaveLength(1)
  })
})
