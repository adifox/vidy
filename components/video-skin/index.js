import dynamic from 'next/dynamic'
const MediaRecorder = dynamic(
  () => {
    return import('../media-recorder')
  },
  {
    ssr: false,
  }
)

import {
  wrapper,
  mediaScreen,
  controlButtons,
  controlButtonsWrapper,
  recordButton,
  stopButton,
  deleteButton,
  saveBtn,
  btn,
} from './videoSkin.module.scss'

export const VideoSkin = () => {
  return (
    <div className={wrapper}>
      <div className={mediaScreen}>
        <MediaRecorder />
      </div>
    </div>
  )
}

// import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons/faRecordVinyl'
// import { faCircleStop } from '@fortawesome/free-solid-svg-icons/faCircleStop'
// import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons/faDeleteLeft'
// import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
// import { Button } from '../button'

{
  /* <div className={controlButtonsWrapper}>
        <Button
          className={`${controlButtons} ${btn}`}
          icon={faRecordVinyl}
          text='RECORD'
        />
        <Button
          className={`${controlButtons} ${btn}`}
          icon={faCircleStop}
          text='STOP'
        />
        <Button
          className={`${controlButtons} ${btn}`}
          icon={faDeleteLeft}
          text='DELETE'
        />
        <Button
          className={`${controlButtons} ${saveBtn}`}
          icon={faSave}
          text='SAVE'
        />
      </div> */
}
