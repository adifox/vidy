import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons/faHouseChimneyUser'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons/faPhotoFilm'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons/faFolderClosed'
import { Button } from '../../components/button'
import { SearchBar } from '../../components/search-bar'
import { NavbarButton } from '../../components/nav-bar-button'
import { Modal } from '../../components/modal'
import { ContentContainer } from '../../components/container/content-container'
import { VideoContainer } from '../../components/container/video-container'
import { ProjectsContainer } from '../../components/container/projects-container'
import { BinContainer } from '../../components/container/bin-container'
import styles from '../../styles/Dashboard.module.css'

const {
  header,
  headerContainer,
  navBar,
  contentContainer,
  dashboard,
  navBarIconContainer,
  dashboardGreenButton,
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
    text: 'Logout',
    href: '/',
    icon: faArrowRightFromBracket,
  },
]

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false)
  const [homeContainer, setHomeContainer] = useState(true)
  const [videoContainer, setVideoContainer] = useState(false)
  const [projectsContainer, setProjectsContainer] = useState(false)
  const [binContainer, setBinContainer] = useState(false)
  const [buttonIndex, setButtonIndex] = useState(1)

  const newVideoHandler = () => {
    console.log('POP UP')
    setOpenModal(true)
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
            className={dashboardGreenButton}
            onClick={newVideoHandler}
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
          <Button text='New Video' className={videoButton} />
          <Button text='New Audio' className={audioButton} />
          <Button
            text='New Video with shared Screen'
            className={videoPlusButton}
          />
        </div>
        <div className={homeContainer ? splittedElements : fullSize}>
          {homeContainer && <ContentContainer />}
          {videoContainer && <VideoContainer />}
          {projectsContainer && <ProjectsContainer />}
          {binContainer && <BinContainer />}
        </div>
      </div>
      {openModal && <Modal onClick={() => setOpenModal(false)} />}
    </div>
  )
}
