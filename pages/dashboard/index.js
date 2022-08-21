import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons/faHouseChimneyUser'
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears'
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons/faPhotoFilm'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons/faFolderClosed'

// Components
import { Button } from '../../components/button'
import { SearchBar } from '../../components/search-bar'
import { NavbarButton } from '../../components/nav-bar-button'
import { Modal } from '../../components/modal'
import { ContentContainer } from '../../components/container/content-container'
import { VideoContainer } from '../../components/container/video-container'
import { ProjectsContainer } from '../../components/container/projects-container'
import { BinContainer } from '../../components/container/bin-container'
import { ProjectForm } from '../../components/proyect-form'
import { VideoSkin } from '../../components/video-skin'

import styles from '../../styles/Dashboard.module.css'

const {
  header,
  headerContainer,
  navBar,
  contentContainer,
  dashboard,
  navBarIconContainer,
  newProjectButton,
  dashboardButtonLine,
  videoButton,
  audioButton,
  videoPlusButton,
  fullSize,
  splittedElements,
} = styles

const NAVBAR_DATA = [
  {
    text: 'Home',
    href: '/',
    icon: faHouseChimneyUser,
  },
  {
    text: 'All Videos',
    href: '/',
    icon: faPhotoFilm,
  },
  {
    text: 'Projects',
    href: '/',
    icon: faFolderClosed,
  },
  {
    text: 'Removed Videos',
    href: '/',
    icon: faTrashCan,
  },
  {
    text: 'Settings',
    href: '/',
    icon: faGears,
  },
]

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false)
  const [homeContainer, setHomeContainer] = useState(true)
  const [videoContainer, setVideoContainer] = useState(false)
  const [projectsContainer, setProjectsContainer] = useState(false)
  const [binContainer, setBinContainer] = useState(false)
  const [videoRecorder, setVideoRecorder] = useState(false)
  const [buttonIndex, setButtonIndex] = useState(0)
  const [createdProjects, setCreatedProjects] = useState([])

  const handleNewProject = () => {
    setOpenModal(true)
    setVideoRecorder(false)
  }

  const newVideoHandler = () => {
    setVideoRecorder(true)
  }

  const handleOnclick = (button, index) => {
    console.log('CLICK:', index)
    console.log('CLICK - Element:', buttonIndex)
    setButtonIndex(index)
    switch (button) {
      case 'All Videos':
        setHomeContainer(false)
        setVideoContainer(true)
        setProjectsContainer(false)
        setBinContainer(false)
        break
      case 'Projects':
        setHomeContainer(false)
        setVideoContainer(false)
        setProjectsContainer(true)
        setBinContainer(false)
        break
      case 'Removed Videos':
        setHomeContainer(false)
        setVideoContainer(false)
        setProjectsContainer(false)
        setBinContainer(true)
        break
      case 'Logout':
        setHomeContainer(false)
        setVideoContainer(false)
        setProjectsContainer(false)
        setBinContainer(true)
        break
      default:
        setHomeContainer(true)
        setVideoContainer(false)
        setProjectsContainer(false)
        setBinContainer(false)
        break
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className={header}>
        <div className={headerContainer}>
          <Button
            text='New Project'
            className={newProjectButton}
            onClick={handleNewProject}
          />
          <SearchBar />
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
            {NAVBAR_DATA.map((component, index) => (
              <li key={index}>
                <NavbarButton
                  {...component}
                  active={index === buttonIndex}
                  onClick={() => handleOnclick(component.text, index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={contentContainer}>
        <div className={dashboardButtonLine}>
          <Button
            text='New Video'
            className={videoButton}
            onClick={newVideoHandler}
          />
          <Button text='New Audio' className={audioButton} />
          <Button
            text='New Video with shared Screen'
            className={videoPlusButton}
          />
          <Link href='/recordvideo'>
            <a>RECORD VIDEO</a>
          </Link>
        </div>
        <div className={homeContainer ? splittedElements : fullSize}>
          {homeContainer && (
            <ContentContainer>
              {videoRecorder && <VideoSkin onClick={setVideoRecorder} />}
            </ContentContainer>
          )}
          {videoContainer && <VideoContainer />}
          {projectsContainer && (
            <ProjectsContainer projects={createdProjects} />
          )}
          {binContainer && <BinContainer />}
        </div>
      </div>
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
