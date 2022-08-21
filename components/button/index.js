import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.css'

const { buttonStyles, buttonContentStyles } = styles

export const Button = ({
  children,
  text,
  color,
  className,
  onClick,
  type,
  icon,
}) => {
  let buttonStyling = buttonStyles
  if (className) {
    buttonStyling = `${buttonStyles} ${className}`
  }
  return (
    <button
      type={type ?? 'button'}
      className={`${buttonStyles} ${className}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className={icon ? buttonContentStyles : ''}>
        <span>{text ?? children}</span>
        <span>{icon && <FontAwesomeIcon icon={icon} />}</span>
      </div>
    </button>
  )
}
