import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'
import { Button } from '../button'
import {
  videoPreviewStyles,
  mainWrapperStyles,
  mediaRecorderInnerStyles,
  recorderVideoStyles,
  buttonsWrapper,
} from './MediaRecorder.module.css'

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  const content = stream ? (
    <video ref={videoRef} className={videoPreviewStyles} autoPlay />
  ) : (
    <div>START RECORDING</div>
  )

  return content
}

export default function MediaRecorder({ onClick }) {
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

  // useEffect(() => {
  //   return () => {
  //     console.log('UNMOUNTING')
  //     // const video = document.querySelector('video')
  //     // const mediaStream = video.srcObject
  //     // const tracks = mediaStream.getTracks()
  //     // tracks.forEach((track) => track.stop())
  //   }
  // })

  const handleStop = (stopRecording, stream) => {
    stopRecording()
    stream.getTracks().forEach((track) => {
      console.log('TRACK:', track)
      track.stop()
    })
  }

  return (
    <div className={mainWrapperStyles}>
      <ReactMediaRecorder
        video
        onStop={fileHandler}
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          previewStream,
          clearBlobUrl,
        }) => (
          <>
            <span>Status: {status}</span>
            <div className={mediaRecorderInnerStyles}>
              <div>
                {status !== 'stopped' && (
                  <VideoPreview stream={previewStream} />
                )}
                {mediaBlobUrl && (
                  <video
                    loop
                    controls
                    className={recorderVideoStyles}
                    src={mediaBlobUrl}
                  />
                )}
              </div>
              <div className={buttonsWrapper}>
                <Button onClick={startRecording}>Start Recording</Button>
                <Button
                  onClick={() => handleStop(stopRecording, previewStream)}
                >
                  Stop Recording
                </Button>
                <Button onClick={handleSaveFile} color={'blue'}>
                  Save Video
                </Button>
                <Button
                  onClick={() => {
                    // onClick(false)
                    clearBlobUrl()
                  }}
                  color={'red'}
                >
                  Done
                </Button>
              </div>
            </div>
          </>
        )}
      />
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
