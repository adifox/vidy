import { useRef, useEffect } from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'
import { Button } from '../button'

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  return <video ref={videoRef} width={500} heigt={500} autoPlay controls />
}

export default function VideoRecorder() {
  // const { status, startRecording, stopRecording, mediaBlobUrl } =
  //   useReactMediaRecorder({ video: true })

  const facingMode = 'user'
  const constraints = {
    audio: false,
    video: {
      facingMode,
    },
  }

  // let videoStream = null
  // navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  //   console.log('THE STREAM:', stream)
  //   videoStream = stream
  // })

  return (
    <div>
      <h2>The video Recorder</h2>
      <ReactMediaRecorder
        video
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          previewStream,
        }) => (
          <div>
            <p>{status}</p>
            <VideoPreview stream={previewStream} />
            <Button onClick={startRecording}>Start Recording</Button>
            <Button onClick={stopRecording}>Stop Recording</Button>
            <video
              autoPlay
              loop
              controls
              style={{
                width: '400px',
                height: '400px',
                border: '2px solid black',
              }}
              src={mediaBlobUrl}
            />
          </div>
        )}
      />
    </div>
  )
}
