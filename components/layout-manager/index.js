import { useRouter } from 'next/router'
// Components
import Head from 'next/head'
import { MainContainer } from '../main-container'
import { DashboardWrapper } from '../dashboard-wrapper'

export const LayoutManager = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  let pageTitle = 'Vidylink'
  let content = null
  switch (pathname) {
    case '/dashboard/audiorecorder':
      content = <>{children}</>
      pageTitle = 'Vidylink Audio Recorder'
      break
    case '/dashboard/screenrecorder':
      content = <>{children}</>
      pageTitle = 'Vidylink Screen Recorder'
      break
    case '/dashboard/videorecorder':
      content = <>{children}</>
      pageTitle = 'Vidylink Video Recorder'
      break
    case '/':
      content = <MainContainer>{children}</MainContainer>
      break
    case '/about':
      content = <MainContainer>{children}</MainContainer>
      pageTitle = 'About Vidylink'
      break
    default:
      content = <DashboardWrapper>{children}</DashboardWrapper>
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
