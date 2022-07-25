import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconWrapper, iconTextStyles } from './NavbarButton.module.css'

export const NavbarButton = ({ text, onClick, icon }) => {
  return (
    <button className={iconWrapper} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <span className={iconTextStyles}>{text}</span>
    </button>
  )
}
