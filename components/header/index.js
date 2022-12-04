import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  headerWrapperStyles,
  headerShadowStyles,
  ulistStyles,
  navBarStyles,
  accessAreaStyles,
  getStartedStyles,
  footer,
} from './header.module.css'

export const Header = ({ children }) => {
  const [negativeHeaderShadow, setNegativeHeaderShadow] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setNegativeHeaderShadow(true)
      } else {
        setNegativeHeaderShadow(false)
      }
    })
  }, [])

  return (
    <>
      <div
        className={
          negativeHeaderShadow ? headerWrapperStyles : headerShadowStyles
        }
      >
        <nav className={navBarStyles}>
          <ul className={ulistStyles}>
            <li>
              <Link href='/about'>
                <a>
                  <h1>What is Vidylink ?</h1>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={accessAreaStyles}>
          <Link href='/dashboard'>
            <a className={getStartedStyles}>GET STARTED</a>
          </Link>
        </div>
      </div>
      {children}
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
    </>
  )
}
