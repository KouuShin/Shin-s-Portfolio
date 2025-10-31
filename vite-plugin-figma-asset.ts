import type { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function figmaAssetPlugin(): Plugin {
  return {
    name: 'vite-plugin-figma-asset',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        const filePath = path.resolve(__dirname, 'assets', filename)
        if (fs.existsSync(filePath)) {
          return filePath
        }
      }
      return null
    },
  }
}

