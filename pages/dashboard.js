import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button'
import styles from '../styles/Dashboard.module.css'

const {
  header,
  headerContainer,
  navBar,
  contentContainer,
  dashboard,
  searchBar,
  videoCardsContainer,
  rightSideBar,
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
