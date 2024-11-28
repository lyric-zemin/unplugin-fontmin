import { describe, expect, it } from 'vitest'
import Fontmin from 'fontmin'

describe('fontmin', () => {
  it('path nested', async () => {
    const fontmin = new Fontmin()
    fontmin.src('test/**/*.{ttf,otf}').dest('test/output')
    fontmin.use(Fontmin.glyph({ text: 'hello' }))
    expect(await fontmin.runAsync()).toHaveLength(1)
  })
})
