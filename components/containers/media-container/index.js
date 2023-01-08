import { VideoCard } from '../../ui-components/video-card'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faCrown } from '@fortawesome/free-solid-svg-icons/faCrown'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
import { Button } from '../../ui-components/button'
import { Avatar } from '../../ui-components/avatar'
// Styles
import {
  mediaContainerHeaderStyles,
  userAreaStyles,
  userAccountStyles,
  userNameStyles,
  userMailStyles,
  userAccountStatusStyles,
  additionalDataBoxStyles,
  premiumButtonStyles,
  avatarWrapper,
  userDetailStyles,
  mediaCardsContainer,
  selectorsContainerStyles,
  mediaSelectorStyles,
  active,
  mediaContentStyles,
} from './mediaContainer.module.css'

const media = [
  {
    mediaName: 'Onboarding',
    description: 'Onboarding video fro new Zartis employees.',
  },
  {
    mediaName: 'Training 1',
    description: 'Training video for new Zartis employees first week.',
  },
  {
    mediaName: 'Training 2',
    description: 'Training video for new Zartis employees first week.',
  },
  {
    mediaName: 'Training 3',
    description: 'Training video for new Zartis employees first week.',
  },
]

export const MediaContainer = ({ userName, userMail, accountStatus }) => {
  userName = 'Szabolcs Lukacs'
  userMail = 'szabolcs@gmail.com'
  accountStatus = 'standard account'
  let content = (
    <EmptyAreaInfo
      icon={faVideoSlash}
      text='Here you can find all your media.'
    />
  )
  if (media.length) {
    content = media.map(({ mediaName, description }, i) => (
      <div key={i} style={{ maxWidth: '550px', minHeight: '155px' }}>
        <VideoCard mediaName={mediaName} description={description} />
      </div>
    ))
  }
  return (
    <>
      <div className={mediaContainerHeaderStyles}>
        <div className={userAreaStyles}>
          <div className={userAccountStyles}>
            <div className={avatarWrapper}>
              <Avatar
                image={{
                  src: '/Images/admin.jpg',
                  alt: 'user image',
                }}
              />
            </div>
            <div className={userDetailStyles}>
              <p className={userNameStyles}>{userName}</p>
              <p className={userMailStyles}>{userMail}</p>
              <p className={userAccountStatusStyles}>{accountStatus}</p>
            </div>
          </div>
          <div className={additionalDataBoxStyles}>
            <Button
              text='Upgrade to Premium'
              className={premiumButtonStyles}
              iconLeft={faCrown}
            />
          </div>
        </div>
      </div>
      <div className={selectorsContainerStyles}>
        <Button
          text='All Media'
          className={`${mediaSelectorStyles} ${active}`}
        />
        <Button text='Video' className={mediaSelectorStyles} />
        <Button text='Screen' className={mediaSelectorStyles} />
        <Button text='Audio' className={mediaSelectorStyles} />
      </div>
      <div className={mediaCardsContainer}>
        <div className={mediaContentStyles}>{content}</div>
      </div>
    </>
  )
}
