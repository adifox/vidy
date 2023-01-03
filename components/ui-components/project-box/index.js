import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd'
import { Button } from '../button'
import { Avatar } from '../avatar'
import {
  projectBoxMainStyles,
  headerStyles,
  addProjectStyles,
  tableHeaderStyles,
  tableBodyStyles,
  projectColorStyles,
  projectNameStyles,
  projectFilesStyles,
  projectDetailStyles,
  projectDateStyles,
  avatarWrapperStyles,
} from './projectBox.module.css'

import { getProjects } from '../../../mocked-data'

const ProjectBoxDetails = ({ project }) => {
  const { name, creationDate, color, mediaFiles, sharedWith } = project

  const usersAvatarIcons = sharedWith.map(({ shortIcon }, i) => (
    <Avatar key={i} user={shortIcon} i={i} />
  ))

  return (
    <div className={tableBodyStyles}>
      <div className={projectNameStyles}>
        <div
          className={projectColorStyles}
          style={{ backgroundColor: color }}
        />
        {name}
      </div>
      <div className={projectDateStyles}>{creationDate}</div>
      <div className={avatarWrapperStyles}>{usersAvatarIcons}</div>
      <div className={projectFilesStyles}>{mediaFiles}</div>
    </div>
  )
}

export const ProjectBox = () => {
  return (
    <div className={projectBoxMainStyles}>
      <div className={headerStyles}>
        <p>Projects</p>
        <div>
          <Button
            text='project'
            className={addProjectStyles}
            iconLeft={faAdd}
          />
        </div>
      </div>
      <div className={tableHeaderStyles}>
        <div>Name</div>
        <div>Created</div>
        <div>Shared</div>
        <div>Files</div>
      </div>
      {getProjects().map((project) => (
        <ProjectBoxDetails key={project.id} project={project} />
      ))}
    </div>
  )
}
