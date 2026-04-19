import { spawnSync } from 'child_process'
import sharp from 'sharp'
import ffmpegPath from 'ffmpeg-static'
import fs from 'fs'
import path from 'path'

const jobs = [
  { video: 'public/videos/יצוג_משפחות_חטופים_בכנסת.mp4',                             out: 'public/pics/ייצוג_משפחות_חטופים_בכנסת-thumb.webp' },
  { video: 'public/videos/ראיון_ערן_בערוץ_12_ועדת_חקירה_אסון_מירון.mp4',              out: 'public/pics/ראיון_ערן_ערוץ_12-thumb.webp' },
  { video: 'public/videos/ראיון_ערן_ערוץ_14_אסון_מירון.mp4',                         out: 'public/pics/ראיון_ערן_ערוץ_14-thumb.webp' },
  { video: 'public/videos/הצהרה_אסון_מירון_מסיבת_עיתונאים.mp4',                       out: 'public/pics/הצהרה_מסיבת_עיתונאים-thumb.webp' },
  { video: 'public/videos/הצהרה_באנדלית_אסון_מירון.mp4',                              out: 'public/pics/הצהרה_באנגלית_מירון-thumb.webp' },
  { video: 'public/pics/lectures/AQMn3mux1xfR6YFcP5v1bt9cTGgKCv_TZovz7wis8r2zArrC5oP_0RYNAN7cb7sIZ-S_639EsiTD3gYvzAjsctJU5LniIL6VX-sgaFZSXQiOYg.mp4',
    out: 'public/pics/lectures/eran-lecture-bar-association-thumb.webp' },
]

const SEEK = '00:00:03'
const MAX_WIDTH = 800

for (const { video, out } of jobs) {
  if (!fs.existsSync(video)) {
    console.error(`MISSING VIDEO: ${video}`)
    continue
  }
  const tmpJpg = out.replace(/\.webp$/, '.__tmp.jpg')
  fs.mkdirSync(path.dirname(tmpJpg), { recursive: true })

  const r = spawnSync(ffmpegPath, ['-y', '-ss', SEEK, '-i', video, '-frames:v', '1', '-q:v', '2', tmpJpg], { stdio: 'pipe' })
  if (r.status !== 0) {
    console.error(`FFMPEG FAIL: ${video}\n${r.stderr?.toString()}`)
    continue
  }

  await sharp(tmpJpg)
    .resize(MAX_WIDTH, null, { withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: 82 })
    .toFile(out)

  fs.unlinkSync(tmpJpg)

  const outSize = fs.statSync(out).size
  console.log(`OK  ${out}  (${(outSize / 1024).toFixed(0)}KB)`)
}

console.log('\nDone.')
