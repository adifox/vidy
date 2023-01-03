import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
// Components
import { Avatar } from '../../ui-components/avatar'
import { ConnectionBox } from '../../ui-components/connection-box'
import { ProjectBox } from '../../ui-components/project-box'
// Styles
import {
  contentMainWrapperStyles,
  personalAreaBanner,
  personalAreaLayover,
  personalAreaContent,
  bodyContent,
  feedTableStyles,
  connectionsStyles,
  rightAreaStyles,
} from './contentContainer.module.css'

export const ContentContainer = ({ children, sideBoard }) => {
  return (
    <>
      <div className={contentMainWrapperStyles}>
        <div className={personalAreaBanner}>
          <div className={personalAreaLayover}>
            <div className={personalAreaContent}>
              <Avatar user='L' i={4} />
            </div>
          </div>
        </div>
        <div className={bodyContent}>
          <div className={feedTableStyles}>
            <h3>My Media</h3>
            {!children ? (
              <EmptyAreaInfo
                icon={faVideoSlash}
                text='Click "Record Video" and record your first Video.'
              />
            ) : (
              children
            )}
          </div>
          <div className={rightAreaStyles}>
            <div className={connectionsStyles}>
              <ConnectionBox />
            </div>
            <div className={connectionsStyles}>
              <ProjectBox />
            </div>
          </div>
        </div>
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
