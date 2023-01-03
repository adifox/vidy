import Image from 'next/image'
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd'
import { Button } from '../button'
import {
  connectionBoxMainStyles,
  headerStyles,
  addContactStyles,
  detailMainWrapperStyles,
  detailStyles,
  userImageWrapperStyles,
  userNameDetailStyles,
  linkStyles,
} from './connectionBox.module.css'

import { getUsers } from '../../../mocked-data'

const ConnectionBoxDetail = ({ user }) => {
  const { name, image, position } = user
  return (
    <div className={detailMainWrapperStyles}>
      <div className={detailStyles}>
        <div className={userImageWrapperStyles}>
          <Image src={image} alt='user-picture' height={56} width={56} />
        </div>
        <div className={userNameDetailStyles}>
          <p>{name}</p>
          <span>{position}</span>
        </div>
      </div>
      <div>
        {/* TODO: Change this Button to a probably click logic for modal with form to paste the vidy link */}
        <Button href='/' text='SEND MESSAGE' className={linkStyles} />
      </div>
    </div>
  )
}

export const ConnectionBox = () => {
  return (
    <div className={connectionBoxMainStyles}>
      <div className={headerStyles}>
        <p>Connections</p>
        <div>
          <Button
            text='contact'
            className={addContactStyles}
            iconLeft={faAdd}
          />
        </div>
      </div>
      {getUsers().map((user) => (
        <ConnectionBoxDetail key={user.id} user={user} />
      ))}
    </div>
  )
}
