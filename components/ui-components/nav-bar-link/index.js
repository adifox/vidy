import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  iconWrapper,
  iconTextStyles,
  activeButton,
} from './NavbarLink.module.css'

export const NavbarLink = ({ text, onClick, icon, active, href }) => {
  return (
    <Link href={href}>
      <a className={active ? activeButton : iconWrapper} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        <span className={iconTextStyles}>{text}</span>
      </a>
    </Link>
  )
}
