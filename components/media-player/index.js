import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { wrapper, mediaScreen } from './mediaPlayer.module.css'

export const MediaPlayer = ({ options, onReady }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      // const videoElement = document.createElement('video-js')
      const videoElement = videoRef.current

      // videoElement.classList.add('vjs-big-play-centered')
      // videoRef.current.appendChild(videoElement)

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready')
        if (onReady) {
          onReady(player)
        }
      }))

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div className={wrapper}>
      <div className={mediaScreen}>
        <video ref={videoRef} className='video-js vjs-big-play-centered' />
        {/* <div ref={videoRef} /> */}
      </div>
    </div>
  )
}
