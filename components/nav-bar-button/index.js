import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavbarButton.module.css'

const { iconWrapper, iconTextStyles } = styles

export const NavbarButton = ({ text, href, icon }) => {
  return (
    <Link href={href}>
      <a>
        <div className={iconWrapper}>
          <FontAwesomeIcon icon={icon} />
          <span className={iconTextStyles}>{text}</span>
        </div>
      </a>
    </Link>
  )
}
