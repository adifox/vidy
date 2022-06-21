import { Button } from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import styles from './Modal.module.css'

const { modalWrapperStyles, modalContainer, modalHeader, modalCloseButton } =
  styles

export const Modal = ({ onClick }) => {
  return (
    <div className={modalWrapperStyles}>
      <div className={modalContainer}>
        <div className={modalHeader}>
          <Button
            onClick={onClick}
            className={modalCloseButton}
            text={<FontAwesomeIcon icon={faClose} />}
          />
        </div>
      </div>
    </div>
  )
}
