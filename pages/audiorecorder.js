// Components
import { VideoSkin } from '../components/video-skin'
// Styles
import {
  videoskinWrapper,
  pageWrapper,
} from '../styles/VideoRecorder.module.css'

export default function AudioRecorder() {
  const options = {
    // wavesurfer: {
    //   backend: 'WebAudio',
    //   waveColor: '#36393b',
    //   progressColor: 'black',
    //   debug: true,
    //   cursorWidth: 1,
    //   msDisplayMax: 20,
    //   hideScrollbar: true,
    //   displayMilliseconds: true,
    //   plugins: [
    //     // enable microphone plugin
    //     WaveSurfer.microphone.create({
    //       bufferSize: 4096,
    //       numberOfInputChannels: 1,
    //       numberOfOutputChannels: 1,
    //       constraints: {
    //         video: false,
    //         audio: true,
    //       },
    //     }),
    //   ],
    // },
    // record: {
    //   video: true,
    //   audio: true,
    //   maxLength: 60,
    //   debug: true,
    // },
  }

  return (
    <div className={pageWrapper}>
      <div className={videoskinWrapper}>
        <VideoSkin recordOptions={options} audio />
      </div>
    </div>
  )
}
