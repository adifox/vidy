import { useRef, useState } from 'react'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import dynamic from 'next/dynamic'
// Player can be loaded only on client side.
const MediaRecorder = dynamic(
  () => {
    return import('../media-recorder')
  },
  {
    ssr: false,
  }
)
import { Button } from '../ui-components/button'

import {
  wrapper,
  mediaScreen,
  controlAreaStyles,
  saveFileButton,
  playerStatusHeaderStyles,
  playerStatusStyles,
  playerStatusArea,
  blink,
  mediaNameInputStyles,
  backToDashboardButton,
  navBackWrapperStyles,
} from './videoSkin.module.css'

export const VideoSkin = ({ onClick, recordOptions, audio }) => {
  const [mediaFile, setMediaFile] = useState(null)
  const [fileName, setFileName] = useState()
  const [fileUploaded, setFileUploaded] = useState(false)
  const [playerStatus, setPlayerStatus] = useState(
    'To activate the device click the icon.'
  )
  const playerRef = useRef(null)

  const VideoJsOptions = {
    controls: true,
    bigPlayButton: false,
    // aspectRatio: '16:9',
    // fluid: true,
    fill: true,
    plugins: recordOptions,
    controlBar: {
      currentTimeDisplay: true,
      timeDivider: true,
      durationDisplay: true,
    },
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    player.on('deviceReady', () => {
      setPlayerStatus('device is ready')
    })

    player.on('deviceError', () => {
      setPlayerStatus('device error')
    })

    player.on('waiting', () => {
      setPlayerStatus('player is waiting')
    })

    player.on('startRecord', () => {
      setPlayerStatus((prev) => {
        if (prev) {
          return 'Re-recording'
        } else {
          return 'Recording'
        }
      })
    })

    player.on('finishRecord', () => {
      setPlayerStatus('Recording finished')
      setMediaFile(player.recordedData)
    })

    player.on('error', (element, error) => {
      setPlayerStatus('Player error')
      console.warn('PLAYER ERROR:', error)
      console.warn('ON ELEMENT:', element)
    })
  }

  const handleFileSave = async () => {
    const formData = new FormData()
    const mediaFormat = mediaFile.name.split('.').pop()
    formData.append('file', mediaFile, `${fileName}.${mediaFormat}`)

    try {
      const response = await axios.post('/api/hello', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      if (response.status === 200) {
        setFileUploaded(true)
      }

      console.log(' FILE UPLOAD RESPONSE:', response)
    } catch (error) {
      console.log('FILE UPLOAD ERROR:', error)
    }
  }

  let statusStylings = playerStatusStyles
  if (playerStatus === 'Recording' || playerStatus === 'Re-recording') {
    statusStylings = blink
  }

  const handleOnClick = (e) => {
    const { value } = e.target
    setFileName(value)
  }

  return (
    <div className={wrapper}>
      <div className={mediaScreen}>
        <MediaRecorder
          options={VideoJsOptions}
          onReady={handlePlayerReady}
          audio={audio}
        />
      </div>
      <div className={controlAreaStyles}>
        <div className={playerStatusArea}>
          <h2 className={playerStatusHeaderStyles}>Player status</h2>
          <p className={statusStylings}>{playerStatus}</p>
        </div>
        {mediaFile && !fileUploaded && (
          <>
            <h4 style={{ margin: '24px 0', textAlign: 'center' }}>
              Are you ready to save the media file?
            </h4>
            <div className={mediaNameInputStyles}>
              <input
                placeholder='Give your file a name'
                name='fileName'
                onChange={handleOnClick}
              />
            </div>
            <Button onClick={handleFileSave} className={saveFileButton}>
              SAVE
            </Button>
          </>
        )}
        {fileUploaded && <h3>Mediafile uploaded</h3>}
        <div className={navBackWrapperStyles}>
          <Button
            className={backToDashboardButton}
            href='/dashboard'
            iconLeft={faArrowLeftLong}
          >
            Back to dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}
