import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../header'
import { DashboardNavigation } from '../dashboard-navigation'
import { VideoCanvas } from '../video-canvas'

export const LayoutManager = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  let pageTitle = 'Vidylink'
  let content = null
  switch (pathname) {
    case '/audiorecorder':
      content = <VideoCanvas>{children}</VideoCanvas>
      pageTitle = 'Vidylink Audio Recorder'
      break
    case '/screenrecorder':
      content = <VideoCanvas>{children}</VideoCanvas>
      pageTitle = 'Vidylink Screen Recorder'
      break
    case '/videorecorder':
      content = <VideoCanvas>{children}</VideoCanvas>
      pageTitle = 'Vidylink Video Recorder'
      break
    case '/':
      content = <Header>{children}</Header>
      break
    case '/about':
      content = <Header>{children}</Header>
      pageTitle = 'About Vidylink'
      break
    default:
      content = <DashboardNavigation>{children}</DashboardNavigation>
      break
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {content}
    </>
  )
}
