import { useRef } from 'react'
import Link from 'next/link'
// import { MyMediaRecorder } from '../components/my-media-recorder'
import dynamic from 'next/dynamic'
const MyMediaRecorder = dynamic(
  () => {
    return import('../components/my-media-recorder')
  },
  {
    ssr: false,
  }
)

export default function RecordVideo() {
  const playerRef = useRef(null)

  const videoJsOptions = {
    controls: true,
    bigPlayButton: false,
    width: 640,
    height: 480,
    fluid: false,
    plugins: {
      /*
        // wavesurfer section is only needed when recording audio-only
        wavesurfer: {
            backend: 'WebAudio',
            waveColor: '#36393b',
            progressColor: 'black',
            debug: true,
            cursorWidth: 1,
            msDisplayMax: 20,
            hideScrollbar: true,
            displayMilliseconds: true,
            plugins: [
                // enable microphone plugin
                WaveSurfer.microphone.create({
                    bufferSize: 4096,
                    numberOfInputChannels: 1,
                    numberOfOutputChannels: 1,
                    constraints: {
                        video: false,
                        audio: true
                    }
                })
            ]
        },
        */
      record: {
        audio: true,
        video: true,
        maxLength: 10,
        debug: true,
      },
    },
    // autoplay: true,
    // controls: true,
    // responsive: true,
    // fluid: true,
    // sources: [
    //   {
    //     src: '/path/to/video.mp4',
    //     type: 'video/mp4',
    //   },
    // ],
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player

    player.on('waiting', () => {
      // videojs.log('player waiting')
      console.log('PLAYER IS WAITING')
    })
  }

  return (
    <div>
      <p>{"VIDEO RECORDER IN IT'S OWN PAGE:"}</p>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>
      <MyMediaRecorder options={videoJsOptions} onReady={handlePlayerReady} />
      {/* <MediaRecorder /> */}
    </div>
  )
}
