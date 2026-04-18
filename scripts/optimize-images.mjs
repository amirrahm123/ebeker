import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const picsDir = 'public/pics'

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

const files = walk(picsDir)

let converted = 0
let skipped = 0
let bytesIn = 0
let bytesOut = 0

for (const file of files) {
  const ext = path.extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  if (fs.existsSync(out)) { skipped++; continue }

  try {
    const inStat = fs.statSync(file)
    await sharp(file)
      .resize(1200, null, { withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 82 })
      .toFile(out)
    const outStat = fs.statSync(out)
    bytesIn += inStat.size
    bytesOut += outStat.size
    converted++
    const saved = ((1 - outStat.size / inStat.size) * 100).toFixed(0)
    console.log(`[${converted}] ${file}  ${(inStat.size/1024).toFixed(0)}KB -> ${(outStat.size/1024).toFixed(0)}KB (-${saved}%)`)
  } catch (e) {
    console.error(`FAIL: ${file} - ${e.message}`)
  }
}

console.log(`\nConverted ${converted}, skipped ${skipped} (already exist)`)
console.log(`Total: ${(bytesIn/1024/1024).toFixed(2)}MB -> ${(bytesOut/1024/1024).toFixed(2)}MB (saved ${((bytesIn-bytesOut)/1024/1024).toFixed(2)}MB)`)
