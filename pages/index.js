import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  container,
  main,
  textHeadingStyles,
  titleWrapperStyles,
  gradientStyles,
  subtitleWrapperStyles,
  subtitleStyles,
  getStartedWrapperStyles,
  getStartedStyles,
  grid,
  card,
} from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={container}>
      <Head>
        <title>Create Vidylink Video</title>
        <meta
          name='description'
          content='Create and instantly share your videos to a public or protected URL.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={main}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: '64px',
          }}
        >
          <div className={titleWrapperStyles}>
            <p className={textHeadingStyles}>
              Record and share a <span className={gradientStyles}>video-</span>,
              <span className={gradientStyles}>screen-</span> or a quick{' '}
              <span className={gradientStyles}>voicemessage</span>
            </p>
            <div className={subtitleWrapperStyles}>
              <p className={subtitleStyles}>
                Vidilynk generates a link from your recorded message in order
                for you to be able to share it quick and easy in an email, slack
                or any social media app you are using.
              </p>
            </div>
            <div className={getStartedWrapperStyles}>
              <Link href='/dashboard'>
                <a className={getStartedStyles}>Get started - it's free</a>
              </Link>
            </div>
          </div>
          {/* <h1 className={styles.title}>Welcome to </h1> */}

          {/* <Image
            src='/Images/logo_color.png'
            alt='Vidy Logo'
            width={72}
            height={72}
          /> */}
        </div>
        {/* <p className={styles.description}>
          Get started by entering{' '}
          <Link href='/dashboard'>
            <a className={styles.code}>/dashboard</a>
          </Link>
        </p> */}

        <div className={grid}>
          <a href='https://nextjs.org/docs' className={card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Vidylink features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Vidylink in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={card}
          >
            <h2>Examples &rarr;</h2>
            <p>
              Discover example Video projects in the Vidylink video library.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={card}
          >
            <h2>Share &rarr;</h2>
            <p>Instantly share your Video to a public URL with Vidylink.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
