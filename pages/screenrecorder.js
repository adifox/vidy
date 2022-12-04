// Components
import { VideoSkin } from '../components/video-skin'
// Styles
import {
  videoskinWrapper,
  pageWrapper,
} from '../styles/VideoRecorder.module.css'

export default function ScreenRecorder() {
  const options = {
    record: {
      screen: true,
      audio: true,
      maxLength: 60,
      debug: true,
    },
  }

  return (
    <div className={pageWrapper}>
      <div className={videoskinWrapper}>
        <VideoSkin recordOptions={options} />
      </div>
    </div>
  )
}
