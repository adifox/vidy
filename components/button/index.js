import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Button.module.css'

const { buttonStyles, buttonContentStyles, linkStyles } = styles

export const Button = ({
  children,
  text,
  color,
  className,
  onClick,
  type,
  icon,
  href,
}) => {
  // let buttonStyling = buttonStyles
  // if (className) {
  //   buttonStyling = `${buttonStyles} ${className}`
  // }

  let content = (
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
  if (href) {
    content = (
      <Link href={href}>
        <a
          className={`${linkStyles} ${className}`}
          style={{ backgroundColor: color }}
        >
          <div className={icon ? buttonContentStyles : ''}>
            <span>{text ?? children}</span>
            <span>{icon && <FontAwesomeIcon icon={icon} />}</span>
          </div>
        </a>
      </Link>
    )
  }

  return content
}
