import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
// import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { EmptyAreaInfo } from '../empty-area-info'
import { videoCardsContainer } from './homeVideo.module.css'

export const HomeVideoContainer = () => {
  return (
    <>
      <div className={videoCardsContainer}>
        <EmptyAreaInfo
          icon={faVideoSlash}
          text='Here you can find all your Videos'
        />
      </div>
    </>
  )
}
