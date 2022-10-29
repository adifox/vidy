import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '../header'
import { DashboardNavigation } from '../dashboard-navigation'
import { VideoCanvas } from '../video-canvas'

export const Layout = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  let content = null
  switch (pathname) {
    case '/videorecorder':
      content = <VideoCanvas>{children}</VideoCanvas>
      break
    case '/':
      content = <Header>{children}</Header>
      break
    default:
      content = <DashboardNavigation>{children}</DashboardNavigation>
      break
  }

  return (
    <>
      <Head>
        <title>Vidylink</title>
      </Head>
      {content}
    </>
  )
}
