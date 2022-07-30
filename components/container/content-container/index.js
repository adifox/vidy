import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { EmptyAreaInfo } from '../../empty-area-info'
import {
  videoCardsContainer,
  rightSideBar,
} from './contentContainer.module.css'

export const ContentContainer = () => {
  return (
    <>
      <div className={videoCardsContainer}>
        <EmptyAreaInfo
          icon={faVideoSlash}
          text='Click "New Video" and record your first Video.'
        />
      </div>
      <div className={rightSideBar}>
        <EmptyAreaInfo
          icon={faUserAltSlash}
          text='Your personal data is empty.'
        />
      </div>
    </>
  )
}
