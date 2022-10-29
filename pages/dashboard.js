import { useState } from 'react'

// Components
import { ContentContainer } from '../components/container/content-container'
import { Button } from '../components/button'
import { VideoSkin } from '../components/video-skin'

// Styles
import styles from '../styles/Dashboard.module.css'
const {
  contentContainer,
  dashboardButtonLine,
  videoButton,
  audioButton,
  splittedElements,
} = styles

export default function Dashboard() {
  const [videoRecorder, setVideoRecorder] = useState(false)

  return (
    <div className={contentContainer}>
      <div className={dashboardButtonLine}>
        <Button
          text='New Video'
          className={videoButton}
          href='/videorecorder'
        />
        <Button text='New Audio' className={audioButton} />
      </div>
      <div className={splittedElements}>
        <ContentContainer
          sideBoard={
            videoRecorder ? (
              <Button onClick={() => setVideoRecorder(false)} color='red'>
                CLOSE RECORDER
              </Button>
            ) : null
          }
        >
          {videoRecorder && <VideoSkin />}
        </ContentContainer>
      </div>
    </div>
  )
}
