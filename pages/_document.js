import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
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
        <meta
          key='msapplication-TileColor'
          name='msapplication-TileColor'
          content='#da532c'
        />
        <meta key='theme-color' name='theme-color' content='#ffffff' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <style data-href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}