// Components
import { ContentContainer } from '../../components/containers/content-container'
import { Button } from '../../components/ui-components/button'

// Styles
import {
  contentContainer,
  dashboardButtonLine,
  videoButton,
  videoScreenShareButton,
  audioButton,
  splittedElements,
} from '../../styles/Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={contentContainer}>
      <ContentContainer />
      {/* <div className={splittedElements}>
      </div> */}
    </div>
  )
}
