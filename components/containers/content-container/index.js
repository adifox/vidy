import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
import {
  videoCardsContainer,
  rightSideBar,
} from './contentContainer.module.css'

export const ContentContainer = ({ children, sideBoard }) => {
  return (
    <>
      <div className={videoCardsContainer}>
        {!children ? (
          <EmptyAreaInfo
            icon={faVideoSlash}
            text='Click "New Video" and record your first Video.'
          />
        ) : (
          children
        )}
      </div>
      <div className={rightSideBar}>
        {!sideBoard ? (
          <EmptyAreaInfo
            icon={faUserAltSlash}
            text='Your personal data is empty.'
          />
        ) : (
          sideBoard
        )}
      </div>
    </>
  )
}
