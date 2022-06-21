import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons/faHouseChimneyUser'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket'
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons/faPhotoFilm'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons/faFolderClosed'
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash'
import { Button } from '../../components/button'
import { SearchBar } from '../../components/search-bar'
import { NavbarButton } from '../../components/nav-bar-button'
import { EmptyAreaInfo } from '../../components/empty-area-info'
import { Modal } from '../../components/modal'
import styles from '../../styles/Dashboard.module.css'

const {
  header,
  headerContainer,
  navBar,
  contentContainer,
  dashboard,
  videoCardsContainer,
  rightSideBar,
  navBarIconContainer,
  dashboardGreenButton,
  dashboardButtonLine,
  videoButton,
  audioButton,
  videoPlusButton,
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

  const newVideoHandler = () => {
    console.log('POP UP')
    setOpenModal(true)
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
                src='/Images/vidy-logo.png'
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
                <NavbarButton {...component} />
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
        <div className={dashboard}>
          <div className={videoCardsContainer}>
            Organizar contenido aqui segun proyectos // Con los últimos videos
            añadidos según su proyecto
            <EmptyAreaInfo
              icon={faVideoSlash}
              text='Click "New Video" and record your first Video'
            />
          </div>
          <div className={rightSideBar}>
            <EmptyAreaInfo
              icon={faUserAltSlash}
              text='Your personal data is empty'
            />
          </div>
        </div>
      </div>
      {openModal && <Modal onClick={() => setOpenModal(false)} />}
    </div>
  )
}
