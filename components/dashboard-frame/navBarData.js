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
    text: 'My Media',
    href: '/dashboard/mediaboard',
    icon: faPhotoFilm,
  },
  {
    text: 'My Projects',
    href: '/dashboard/my-projects',
    icon: faFolderClosed,
  },
  {
    text: 'Removed Media',
    href: '/dashboard/remove-media',
    icon: faTrashCan,
  },
  {
    text: 'Settings',
    href: '/dashboard/settings',
    icon: faGears,
  },
]
