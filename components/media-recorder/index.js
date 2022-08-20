import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'

import { Button } from '../button'

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  return (
    <video ref={videoRef} style={{ width: '50vw', height: '500px' }} autoPlay />
  )
}

export default function MediaRecorder() {
  const [file, setFile] = useState()
  // const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
  //   useReactMediaRecorder({ video: true, onStop: () => fileHandler })

  const fileHandler = (blobUrl, blob) => {
    console.log('THE FILE HANDLER CALLED:', blob)
    blob.lastModified = new Date()
    console.log('THE BLOB - ADDED META DATA:', blob)

    const myVideFile = new File([blob], 'createdVideo.mp4', { type: blob.type })
    setFile(myVideFile)
    console.log('THE VIDEO FILE:', myVideFile)
  }

  const handleSaveFile = async () => {
    console.log('THE FIEL TO SEND:', file)
    const formData = new FormData()
    // formData.append('title', 'mySuperVideo')
    formData.append('file', file, file.name)

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <ReactMediaRecorder
        video
        onStop={fileHandler}
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          previewStream,
        }) => (
          <>
            <span>Status: {status}</span>
            <div
              style={{ display: 'flex', background: 'green', width: '100%' }}
            >
              <div>
                {status !== 'stopped' && (
                  <VideoPreview stream={previewStream} />
                )}
                {mediaBlobUrl && (
                  <video
                    loop
                    controls
                    style={{
                      width: '50vw',
                      height: '400px',
                      border: '2px solid black',
                    }}
                    src={mediaBlobUrl}
                  />
                )}
              </div>
              <div>
                <Button onClick={startRecording}>Start Recording</Button>
                <Button onClick={stopRecording}>Stop Recording</Button>
              </div>
            </div>
          </>
        )}
      />
      <Button onClick={handleSaveFile}>Save Video</Button>
    </div>
  )
}

// const facingMode = 'user'
// const constraints = {
//   audio: false,
//   video: {
//     facingMode,
//   },
// }

// let videoStream = null
// navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//   console.log('THE STREAM:', stream)
//   videoStream = stream
// })

{
  /* <VideoRecorder
        constraints={{
          audio: true,
          video: true,
        }}
        onRecordingComplete={(videoBlob) => {
          fileHandler(videoBlob)
        }}
        onError={(err) => console.log('TEH ERROR:', err)}
      /> */
}
