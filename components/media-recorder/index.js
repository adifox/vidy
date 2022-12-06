import { useEffect, useRef } from 'react'
import 'video.js/dist/video-js.css'
import videojs from 'video.js'

import 'webrtc-adapter'
import RecordRTC from 'recordrtc'

import { VideojsRecord } from 'videojs-record'
import Record from 'videojs-record/dist/videojs.record.js'
import 'videojs-record/dist/css/videojs.record.css'

// FOR AUDIO RECORDING
import WaveSurfer from 'wavesurfer.js'
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js'
WaveSurfer.microphone = MicrophonePlugin

import recorderjs from 'recorderjs'

console.log('RECORDER JS:', recorderjs)

// Register videojs-wavesurfer plugin
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css'
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js'

// apply some workarounds for certain browsers
// applyVideoWorkaround()
// applyScreenWorkaround()

export default function MediaRecorder({
  options,
  onReady,
  videoOptions = {},
  audio,
}) {
  const mediaRef = useRef(null)
  const playerRef = useRef(null)

  if (audio) {
    options = {
      ...options,
      plugins: {
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
                audio: true,
              },
            }),
          ],
        },
        record: {
          audio: true,
          video: false,
          maxLength: 20,
          debug: true,
          displayMilliseconds: true,
          // audioEngine: 'recorder.js',
        },
      },
    }
  }

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = mediaRef.current

      if (!videoElement) {
        return
      }

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log(
          'player is ready VERSION and PLUGIN VERSION',
          videojs.VERSION,
          videojs.getPluginVersion('record'),
          ', videojs-wavesurfer ' +
            videojs.getPluginVersion('wavesurfer') +
            ' and wavesurfer.js ' +
            WaveSurfer.VERSION +
            ' and recordrtc ' +
            RecordRTC.version
        )
        if (onReady) {
          onReady(player)
        }
      }))
    }
  }, [options, mediaRef, onReady])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return audio ? (
    <audio id='myAudio' ref={mediaRef} className='video-js vjs-default-skin' />
  ) : (
    <div data-vjs-player>
      <video
        id='myVideo'
        ref={mediaRef}
        className='video-js vjs-big-play-centered'
        playsInline
        {...videoOptions}
      />
    </div>
  )
}
