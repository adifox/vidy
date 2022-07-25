import Head from 'next/head'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vidylink</title>
      </Head>
      {children}
    </>
  )
}
