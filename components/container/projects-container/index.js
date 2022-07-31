import { faFolderMinus } from '@fortawesome/free-solid-svg-icons/faFolderMinus'
import { ProjectCard } from '../../project-card'
import { EmptyAreaInfo } from '../../empty-area-info'
import {
  projectCardsContainer,
  cardWrapperStyles,
  emptyContainerStyles,
} from './projectsContainer.module.css'

export const ProjectsContainer = ({ projects }) => {
  return (
    <>
      <div
        className={
          !projects.length ? emptyContainerStyles : projectCardsContainer
        }
      >
        {!projects.length && (
          <EmptyAreaInfo
            icon={faFolderMinus}
            text='Here you can find all your Projects.'
          />
        )}
        {projects.map(({ projectName, selectBorder }, index) => (
          <div key={index} className={cardWrapperStyles}>
            <ProjectCard projectName={projectName} color={selectBorder} />
          </div>
        ))}
      </div>
    </>
  )
}
