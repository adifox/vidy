import { Button } from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import {
  modalWrapperStyles,
  modalContainer,
  modalHeader,
  modalCloseButton,
  contentWrapperStyles,
  modalFooterStyles,
  modalSecondaryCloseButton,
} from './Modal.module.css'

export const Modal = ({ onClick, children }) => {
  return (
    <div className={modalWrapperStyles}>
      <div className={modalContainer}>
        {/* <div className={modalHeader}>
          <Button
            onClick={onClick}
            className={modalCloseButton}
            text={<FontAwesomeIcon icon={faClose} />}
          />
        </div> */}
        <div className={contentWrapperStyles}>{children}</div>
        <div className={modalFooterStyles}>
          <Button
            onClick={onClick}
            className={modalSecondaryCloseButton}
            text='Done'
          />
        </div>
      </div>
    </div>
  )
}
