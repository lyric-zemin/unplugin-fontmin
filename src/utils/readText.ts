import type { Dirent } from 'node:fs'
import { readFile, readdir } from 'node:fs/promises'
import { extname, resolve } from 'node:path'

const suffixes = ['.js', '.css', '.json']

export async function readText(dir: string): Promise<string> {
  let result = ''

  const files = (await readDir(dir))
    .filter(file => suffixes.includes(extname(file.name)))

  for (const file of files) {
    const text = await readFile(resolve(file.parentPath, file.name), 'utf-8')
    result += text
  }

  return result
}

export async function readDir(dir: string): Promise<Dirent[]> {
  const files: Dirent[] = []

  const fileResult = await readdir(dir, { withFileTypes: true })

  for (const file of fileResult) {
    if (file.isDirectory()) {
      files.push(...(await readDir(resolve(dir, file.name))))
    }
    else {
      files.push(file)
    }
  }

  return files
}
