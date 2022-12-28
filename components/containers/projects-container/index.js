import { faFolderMinus } from '@fortawesome/free-solid-svg-icons/faFolderMinus'
import { ProjectCard } from '../../ui-components/project-card'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
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
          !projects?.length ? emptyContainerStyles : projectCardsContainer
        }
      >
        {!projects?.length ? (
          <EmptyAreaInfo
            icon={faFolderMinus}
            text='Here you can find all your Projects.'
          />
        ) : (
          projects.map(({ projectName, selectBorder }, index) => (
            <ProjectCard
              key={index}
              projectName={projectName}
              color={selectBorder}
            />
            // <div className={cardWrapperStyles}>
            // </div>
          ))
        )}
      </div>
    </>
  )
}
