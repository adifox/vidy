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
        <meta
          key='viewport'
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
        <meta
          key='msapplication-TileColor'
          name='msapplication-TileColor'
          content='#ffffff'
        />
        <meta
          key='msapplication-TileImage'
          name='msapplication-TileImage'
          content='/ms-icon-144x144.png'
        />
        <meta key='theme-color' name='theme-color' content='#ffffff' />
      </Head>
      <LayoutManager>
        <Component {...pageProps} />
      </LayoutManager>
    </>
  )
}

export default MyApp
