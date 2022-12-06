// Components
import { ContentContainer } from '../../components/containers/content-container'
import { Button } from '../../components/ui-components/button'

// Styles
import styles from '../../styles/Dashboard.module.css'
const {
  contentContainer,
  dashboardButtonLine,
  videoButton,
  videoScreenShareButton,
  audioButton,
  splittedElements,
} = styles

export default function Dashboard() {
  return (
    <div className={contentContainer}>
      <div className={dashboardButtonLine}>
        <Button
          text='Record Video'
          className={videoButton}
          href='dashboard/videorecorder'
        />
        <Button
          text='Record Screen'
          className={videoScreenShareButton}
          href='dashboard/screenrecorder'
        />
        <Button
          text='Record Audio'
          className={audioButton}
          href='dashboard/audiorecorder'
        />
      </div>
      <div className={splittedElements}>
        <ContentContainer></ContentContainer>
      </div>
    </div>
  )
}
