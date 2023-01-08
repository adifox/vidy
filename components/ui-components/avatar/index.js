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
  {
    color: '#d7c30e',
  },
]

export const Avatar = ({ image, user, i }) => {
  let content = null
  if (image?.src) {
    const { src, alt } = image
    // Todo add blurDataURL
    content = <Image src={src} alt={alt} layout='fill' objectFit='cover' />
  } else {
    content = (
      <div
        className={avatarStyles}
        style={{ backgroundColor: `${colors[i].color}` }}
      >
        <p>{user}</p>
      </div>
    )
  }

  return content
}
