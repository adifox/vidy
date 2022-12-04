import { useEffect, useRef } from 'react'
import 'video.js/dist/video-js.css'
import videojs from 'video.js'

import 'webrtc-adapter'
import RecordRTC from 'recordrtc'

import { VideojsRecord } from 'videojs-record'
import Record from 'videojs-record/dist/videojs.record.js'
import 'videojs-record/dist/css/videojs.record.css'

// apply some workarounds for certain browsers
// applyVideoWorkaround()
// applyScreenWorkaround()

export default function MyMediaRecorder({
  options,
  onReady,
  videoOptions = {},
}) {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current

      if (!videoElement) return

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log(
          'player is ready VERSION and PLUGIN VERSION',
          videojs.VERSION,
          videojs.getPluginVersion('record'),
          ' and recordrtc ' + RecordRTC.version
        )
        onReady && onReady(player)
      }))
    }
  }, [options, videoRef, onReady])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <video
        id='myVideo'
        ref={videoRef}
        className='video-js vjs-big-play-centered'
        playsInline
        {...videoOptions}
      />
    </div>
  )
}
