import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navBarData } from './navBarData'

// Components
import { Button } from '../ui-components/button'
import { SearchBar } from '../ui-components/search-bar'
import { NavbarLink } from '../ui-components/nav-bar-link'
import { Modal } from '../ui-components/modal'
import { ProjectForm } from '../ui-components/proyect-form'

// Styles
import styles from './DashboardFrame.module.css'
const {
  header,
  headerContainer,
  navBar,
  contentContainer,
  navBarIconContainer,
  newProjectButton,
  videoButton,
  videoScreenShareButton,
  audioButton,
} = styles

export const DashboardFrame = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)
  const [createdProjects, setCreatedProjects] = useState([])

  const handleNewProject = () => {
    setOpenModal(true)
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className={header}>
        <div className={headerContainer}>
          <div style={{ display: 'flex' }}>
            <Button
              text='New Project'
              className={newProjectButton}
              onClick={handleNewProject}
            />
            <SearchBar />
          </div>
          <div style={{ display: 'flex' }}>
            <Button
              text='Record Video'
              className={videoButton}
              href='dashboard/videorecorder'
            />
            <Button
              text='Record Screen'
              className={videoScreenShareButton}
              href='dashboard/screenrecorder'
            />
            <Button
              text='Record Audio'
              className={audioButton}
              href='dashboard/audiorecorder'
            />
          </div>
        </div>
      </div>
      <div className={navBar}>
        <div>
          <Link href='/'>
            <a>
              <Image
                src='/Images/logo_blanco.png'
                alt='Vidy Logo'
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div className={navBarIconContainer}>
          <ul>
            {navBarData.map((component, index) => (
              <li key={index}>
                <NavbarLink {...component} href={component.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={contentContainer}>{children}</div>
      {openModal && (
        <Modal onClick={() => setOpenModal(false)}>
          <ProjectForm
            addProject={setCreatedProjects}
            projects={createdProjects}
          />
        </Modal>
      )}
    </div>
  )
}
