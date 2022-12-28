import { useRef } from 'react'
import { MediaPlayer } from '../../components/media-player'
import {
  pageWrapper,
  videoskinWrapper,
} from '../../styles/Mediaplayer.module.css'

const Page = () => {
  const playerRef = useRef(null)

  const playerOptions = {
    autoplay: false,
    controls: true,
    bigPlayButton: true,
    fill: true,
    sources: [
      {
        src: '/uploads/safari-red.mp4',
        type: 'audio/mp4',
      },
    ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting')
    })

    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  return (
    <div className={pageWrapper}>
      <div className={videoskinWrapper}>
        <MediaPlayer options={playerOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  )
}

export default Page
