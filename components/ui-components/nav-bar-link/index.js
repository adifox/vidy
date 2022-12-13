import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  iconWrapper,
  iconTextStyles,
  activeButton,
} from './NavbarLink.module.css'

export const NavbarLink = ({ text, icon, href }) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className={href === router.pathname ? activeButton : iconWrapper}>
        <FontAwesomeIcon icon={icon} />
        <span className={iconTextStyles}>{text}</span>
      </a>
    </Link>
  )
}
