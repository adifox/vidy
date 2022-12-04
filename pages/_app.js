import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { LayoutManager } from '../components/layout-manager'
import '../styles/globals.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <LayoutManager>
        <Component {...pageProps} />
      </LayoutManager>
    </>
  )
}

export default MyApp
