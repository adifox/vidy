import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
// import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
import { videoCardsContainer } from './videoContainer.module.css'

export const VideoContainer = () => {
  return (
    <>
      <div className={videoCardsContainer}>
        <EmptyAreaInfo
          icon={faVideoSlash}
          text='Here you can find all your Videos.'
        />
      </div>
    </>
  )
}
