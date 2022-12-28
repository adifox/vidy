import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
// Components
import { Avatar } from '../../ui-components/avatar'
// Styles
import {
  videoCardsContainer,
  personalAreaBanner,
  personalAreaLayover,
  personalAreaContent,
  bodyContent,
} from './contentContainer.module.css'

export const ContentContainer = ({ children, sideBoard }) => {
  return (
    <>
      <div className={videoCardsContainer}>
        <div className={personalAreaBanner}>
          <div className={personalAreaLayover}>
            <div className={personalAreaContent}>
              <Avatar user='L' i={4} />
            </div>
          </div>
        </div>
        <div className={bodyContent}>
          <h3>My Media</h3>
        </div>
        {!children ? (
          <EmptyAreaInfo
            icon={faVideoSlash}
            text='Click "Record Video" and record your first Video.'
          />
        ) : (
          children
        )}
      </div>
      {/* <div className={rightSideBar}>
        {!sideBoard ? (
          <EmptyAreaInfo
            icon={faUserAltSlash}
            text='Your personal data is empty.'
          />
        ) : (
          sideBoard
        )}
      </div> */}
    </>
  )
}
