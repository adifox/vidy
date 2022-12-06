import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EmptyAreaInfo = ({ text, icon }) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </>
  )
}
