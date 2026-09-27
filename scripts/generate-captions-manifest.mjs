/**
 * Lists the .vtt files under public/videos into src/generated/captions.json.
 * src/components/Video.jsx reads this list to decide whether to add a
 * <track kind="captions">. Runs on prebuild, so dropping in a .vtt file
 * (same base name as its .mp4) is all that's needed to add captions later.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const videosDir = path.join(root, 'public', 'videos')
const outFile = path.join(root, 'src', 'generated', 'captions.json')

const vttFiles = fs.existsSync(videosDir)
  ? fs.readdirSync(videosDir).filter(f => f.toLowerCase().endsWith('.vtt'))
  : []

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(vttFiles, null, 2) + '\n')
console.log(`captions manifest: ${vttFiles.length} .vtt file(s) → src/generated/captions.json`)
