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
  iconRight,
  href,
  iconLeft,
  disable = false,
}) => {
  // let buttonStyling = buttonStyles
  // if (className) {
  //   buttonStyling = `${buttonStyles} ${className}`
  // }

  return href ? (
    <Link href={href}>
      <a
        className={`${linkStyles} ${className}`}
        style={{ backgroundColor: color }}
      >
        <div className={iconLeft || iconRight ? buttonContentStyles : ''}>
          <span style={{ marginRight: '8px' }}>
            {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
          </span>
          <span>{text ?? children}</span>
          <span style={{ marginLeft: '8px' }}>
            {iconRight && <FontAwesomeIcon icon={iconRight} />}
          </span>
        </div>
      </a>
    </Link>
  ) : (
    <button
      type={type ?? 'button'}
      className={`${buttonStyles} ${className}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      disabled={disable}
    >
      <div className={iconLeft || iconRight ? buttonContentStyles : ''}>
        <span style={{ marginRight: '8px' }}>
          {iconLeft && <FontAwesomeIcon icon={iconLeft} />}
        </span>
        <span>{text ?? children}</span>
        <span style={{ marginLeft: '8px' }}>
          {iconRight && <FontAwesomeIcon icon={iconRight} />}
        </span>
      </div>
    </button>
  )
}
