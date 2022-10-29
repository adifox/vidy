import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons/faHouseChimneyUser'
import { faGears } from '@fortawesome/free-solid-svg-icons/faGears'
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons/faPhotoFilm'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons/faFolderClosed'

export const navBarData = [
  {
    text: 'Home',
    href: '/dashboard',
    icon: faHouseChimneyUser,
  },
  {
    text: 'All Videos',
    href: '/videoboard',
    icon: faPhotoFilm,
  },
  {
    text: 'Projects',
    href: '/',
    icon: faFolderClosed,
  },
  {
    text: 'Removed Videos',
    href: '/',
    icon: faTrashCan,
  },
  {
    text: 'Settings',
    href: '/',
    icon: faGears,
  },
]
