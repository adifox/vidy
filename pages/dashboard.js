// Components
import { ContentContainer } from '../components/container/content-container'
import { Button } from '../components/button'

// Styles
import styles from '../styles/Dashboard.module.css'
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
          href='/videorecorder'
        />
        <Button
          text='Record Screen'
          className={videoScreenShareButton}
          href='/screenrecorder'
        />
        <Button
          text='Record Audio'
          className={audioButton}
          href='/audiorecorder'
        />
      </div>
      <div className={splittedElements}>
        <ContentContainer></ContentContainer>
      </div>
    </div>
  )
}
