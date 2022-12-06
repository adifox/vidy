import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Vidylink Video</title>
        <meta
          name='description'
          content='Create and instantly share your videos to a public or protected URL.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: '64px',
          }}
        >
          {/* <h1 className={styles.title}>Welcome to </h1> */}
          <Image
            src='/Images/logo_color.png'
            alt='Vidy Logo'
            width={72}
            height={72}
          />
        </div>
        {/* <p className={styles.description}>
          Get started by entering{' '}
          <Link href='/dashboard'>
            <a className={styles.code}>/dashboard</a>
          </Link>
        </p> */}

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Vidylink features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Vidylink in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>
              Discover example Video projects in the Vidylink video library.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Share &rarr;</h2>
            <p>Instantly share your Video to a public URL with Vidylink.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
