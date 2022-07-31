import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  iconWrapper,
  iconTextStyles,
  activeButton,
} from './NavbarButton.module.css'

export const NavbarButton = ({ text, onClick, icon, active }) => {
  return (
    <button className={active ? activeButton : iconWrapper} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <span className={iconTextStyles}>{text}</span>
    </button>
  )
}

NavbarButton.displayName = 'NavbarButton'
