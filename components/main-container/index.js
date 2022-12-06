import { Header } from '../header'
import { Footer } from '../footer'

export const MainContainer = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
