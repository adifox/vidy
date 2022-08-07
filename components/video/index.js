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

  return <video ref={videoRef} width={500} heigt={500} autoPlay />
}

export default function VideoRecorder() {
  const [file, setFile] = useState()

  const fileHandler = (blobUrl, blob) => {
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
      // const response = await axios({
      //   method: 'post',
      //   url: '/api/hello',
      //   data: formData,
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // })
      const response = await axios.post('/api/hello', formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })

      console.log(' FILE UPLOAD RESPONSE:', response)
    } catch (error) {
      console.log('FILE UPLOAD ERROR:', error)
    }
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

  return (
    <div>
      <h2>The video Recorder</h2>
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
      <Button onClick={handleSaveFile}>Save Video</Button>
    </div>
  )
}
