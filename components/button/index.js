import styles from './Button.module.css'

const { buttonStyles } = styles

export const Button = ({ children, text, color, className, onClick }) => {
  let buttonStyling = buttonStyles
  if (className) {
    buttonStyling = `${buttonStyles} ${className}`
  }
  return (
    <button type='button' className={buttonStyling} onClick={onClick}>
      {text ?? children}
    </button>
  )
}
