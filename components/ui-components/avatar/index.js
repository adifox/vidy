// Components
import Image from 'next/image'
// Styles
import { avatarStyles } from './avatar.module.css'

const colors = [
  {
    color: '#3a95c9',
  },
  {
    color: '#5c1d66',
  },
  {
    color: '#1d663a',
  },
  {
    color: '#66381d',
  },
]

export const Avatar = ({ image, user, i }) => {
  let content = (
    <div
      className={avatarStyles}
      style={{ backgroundColor: `${colors[i].color}` }}
    >
      <p>{user}</p>
    </div>
  )
  if (image?.src) {
    const { src, alt } = image
    content = <Image src={src} alt={alt} layout='fill' placeholder='blur' />
  }

  return content
}
