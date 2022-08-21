import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import { VideojsRecord } from 'videojs-record'
import Record from 'videojs-record/dist/videojs.record.js'
import 'video.js/dist/video-js.css'
import 'videojs-record/dist/css/videojs.record.css'

export default function MyMediaRecorder({ options, onReady }) {
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
          videojs.getPluginVersion('record')
        )
        onReady && onReady(player)
      }))

      player.on('deviceReady', () => {
        console.log('device is ready')
      })

      player.on('startRecord', () => {
        console.log('Started Recording')
      })

      player.on('finishRecord', () => {
        console.log('finished recording:', player.recordedData)
      })

      player.on('error', (element, error) => {
        console.warn('PLAYER ERROR:', error)
        console.warn('ON ELEMENT:', element)
      })

      player.on('deviceError', () => {
        console.error('device error', player.deviceErrorCode)
      })
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
      />
    </div>
  )
}
