// Components
import { VideoCard } from '../../ui-components/video-card'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
// Styles
import { videoCardsContainer } from './videoContainer.module.css'

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

export const MediaContainer = () => {
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
      <div className={videoCardsContainer}>{content}</div>
    </>
  )
}
