import { faFolderMinus } from '@fortawesome/free-solid-svg-icons/faFolderMinus'
import { EmptyAreaInfo } from '../../empty-area-info'
import { projectCardsContainer } from './projectsContainer.module.css'

export const ProjectsContainer = () => {
  return (
    <>
      <div className={projectCardsContainer}>
        <EmptyAreaInfo
          icon={faFolderMinus}
          text='Here you can find all your Projects.'
        />
      </div>
    </>
  )
}
