import { useEffect, useState } from 'react'
// Components
import Link from 'next/link'
// Styles
import {
  headerWrapperStyles,
  headerShadowStyles,
  ulistStyles,
  navBarStyles,
  accessAreaStyles,
  getStartedStyles,
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
    </>
  )
}
