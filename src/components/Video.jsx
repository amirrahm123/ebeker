/* eslint-disable react/prop-types -- this codebase does not use PropTypes anywhere */
import { forwardRef } from 'react'
import captions from '../generated/captions.json'

/**
 * <video> with automatic Hebrew captions and an optional transcript.
 *
 * Captions: drop `public/videos/<same-name>.vtt` next to the .mp4 and rebuild —
 * scripts/generate-captions-manifest.mjs (prebuild) lists the .vtt files into
 * src/generated/captions.json, and this component adds the <track>.
 * Transcript: pass `transcript` (string) and it renders in a collapsible block.
 */
const Video = forwardRef(function Video({ src, transcript, className, ...props }, ref) {
  const file = decodeURIComponent(src.split('/').pop() || '')
  const base = file.replace(/\.[^.]+$/, '')
  const vtt = captions.includes(`${base}.vtt`) ? `/videos/${encodeURIComponent(base)}.vtt` : null

  const video = (
    <video ref={ref} src={src} className={className} {...props}>
      {vtt && <track kind="captions" srcLang="he" label="עברית" src={vtt} default />}
    </video>
  )

  if (!transcript) return video
  return (
    <div className="video-with-transcript">
      {video}
      <details className="video-transcript">
        <summary>תמליל הסרטון</summary>
        <p>{transcript}</p>
      </details>
    </div>
  )
})

export default Video
