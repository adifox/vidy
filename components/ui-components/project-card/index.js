// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons/faFileVideo'
import { Avatar } from '../avatar'
// Styles
import {
  wrapperStyles,
  colorBadgeStyles,
  cardHeader,
  cardBodyStyles,
  iconWrapperStyles,
  avatarHeaderStyles,
  iconPositioningStyles,
} from './projectCard.module.css'

const users = [{ user: 'L' }, { user: 'M' }, { user: 'P' }, { user: 'T' }]

export const ProjectCard = ({
  projectName,
  teamName,
  creationDate,
  color,
  mediaContent,
}) => {
  projectName = 'App Development'
  teamName = 'Vidylink'
  creationDate = '28, Dec 2022'
  mediaContent = 4
  return (
    <div className={wrapperStyles}>
      <div className={colorBadgeStyles} style={{ backgroundColor: color }} />
      <div className={cardHeader}>
        <h4>{projectName}</h4>
        <span className={iconWrapperStyles}>
          <span className={iconPositioningStyles}>
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <p>{teamName}</p>
        </span>
        <span className={iconWrapperStyles}>
          <span className={iconPositioningStyles}>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <p>{creationDate}</p>
        </span>
        <span className={iconWrapperStyles}>
          <span className={iconPositioningStyles}>
            <FontAwesomeIcon icon={faFileVideo} />
          </span>
          <p>{mediaContent}</p>
        </span>
      </div>
      <div className={cardBodyStyles}>
        <p className={avatarHeaderStyles}>Sharing with:</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {users.map(({ user }, i) => (
            <Avatar key={i} user={user} i={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
