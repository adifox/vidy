import styles from './Button.module.css'

const { buttonStyles } = styles

export const Button = ({ text, color, styling }) => {
  return (
    <button
      type='button'
      // style={{
      //   padding: '10px',
      //   borderRadius: '10px',
      //   color: '#fff',
      //   border: 'none',
      //   letterSpacing: '1px',
      //   fontSize: '16px',
      // }}
      className={buttonStyles}
    >
      {text}
    </button>
  )
}
