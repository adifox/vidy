import Image from 'next/image'
import { footer } from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={footer}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
      </a>
      <Image
        src='/Images/logo_color.png'
        alt='Vidy Logo'
        width={72}
        height={72}
      />
    </footer>
  )
}
