import { useRef, useState } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'
const MyMediaRecorder = dynamic(
  () => {
    return import('../my-media-recorder')
  },
  {
    ssr: false,
  }
)
import { Button } from '../button'

const VideoJsOptions = {
  controls: true,
  bigPlayButton: false,
  width: 1380,
  height: 700,
  plugins: {
    record: {
      audio: true,
      video: true,
      maxLength: 10,
      debug: true,
    },
  },
}

import { wrapper, mediaScreen } from './videoSkin.module.scss'

export const VideoSkin = ({ onClick }) => {
  const [mediaFile, setMediaFile] = useState(null)
  const playerRef = useRef(null)

  const handlePlayerReady = (player) => {
    playerRef.current = player

    player.on('waiting', () => {
      console.log('PLAYER IS WAITING')
    })

    player.on('finishRecord', () => {
      console.log('finished recording:', player.recordedData)
      setMediaFile(player.recordedData)
    })
  }

  const handleFileSave = async () => {
    console.log('THE FIEL TO SEND:', mediaFile)
    const formData = new FormData()
    // formData.append('title', 'mySuperVideo')
    formData.append('file', mediaFile, mediaFile.name)

    console.log('THE HEDERS?????', formData)

    try {
      const response = await axios.post('/api/hello', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })

      console.log(' FILE UPLOAD RESPONSE:', response)
    } catch (error) {
      console.log('FILE UPLOAD ERROR:', error)
    }
  }

  return (
    <div className={wrapper}>
      <div className={mediaScreen}>
        <MyMediaRecorder options={VideoJsOptions} onReady={handlePlayerReady} />
      </div>
      <div>
        <Button onClick={handleFileSave} color='green'>
          SAVE
        </Button>
      </div>
    </div>
  )
}
