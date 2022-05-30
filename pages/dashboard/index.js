import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVideoSlash,
  faHouseChimneyUser,
  faArrowRightFromBracket,
  faPhotoFilm,
  faTrashCan,
  faFolderClosed,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../components/button'
import styles from '../../styles/Dashboard.module.css'

const {
  header,
  headerContainer,
  navBar,
  contentContainer,
  dashboard,
  searchBar,
  videoCardsContainer,
  rightSideBar,
  navBarIconContainer,
  iconWrapper,
  iconTextStyles,
} = styles

export default function Dashboard() {
  return (
    <>
      <div className={header}>
        <div className={headerContainer}>
          <Button text='New Video' />
          <input placeholder='Search Videos' className={searchBar} />
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
            <li>
              <Link href='/'>
                <a>
                  <div className={iconWrapper}>
                    <FontAwesomeIcon icon={faHouseChimneyUser} />
                    <span className={iconTextStyles}>Home</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/dashboard/videos'>
                <a>
                  <div className={iconWrapper}>
                    <FontAwesomeIcon icon={faPhotoFilm} />
                    <span className={iconTextStyles}>All Videos</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <div className={iconWrapper}>
                    <FontAwesomeIcon icon={faFolderClosed} />
                    <span className={iconTextStyles}>Projects</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <div className={iconWrapper}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <span className={iconTextStyles}>Removed Videos</span>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <div className={iconWrapper}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <span className={iconTextStyles}>Logout</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={contentContainer}>
        <div className={dashboard}>
          <div className={videoCardsContainer}>
            <FontAwesomeIcon icon={faVideoSlash} />
            <p>You have no created videos</p>
          </div>
          <div className={rightSideBar}>right side bar</div>
        </div>
      </div>
    </>
  )
}
