import { useEffect, useState } from 'react'
// Components
import Link from 'next/link'
import Image from 'next/image'
// Styles
import {
  headerWrapperStyles,
  headerShadowStyles,
  ulistStyles,
  navBarStyles,
  accessAreaStyles,
  getStartedStyles,
  logoStyles,
  companyNameStyles,
  logoLinkStyles,
} from './header.module.css'

export const Header = () => {
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
        <div className={navBarStyles}>
          <nav>
            <div className={logoStyles}>
              <Link href='/about'>
                <a className={logoLinkStyles}>
                  <Image
                    src='/Images/logo_color.png'
                    alt='Vidy Logo'
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
              <p className={companyNameStyles}>vidylink</p>
            </div>
          </nav>
          <div className={accessAreaStyles}>
            <Link href='/dashboard'>
              <a className={getStartedStyles}>Get started</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
