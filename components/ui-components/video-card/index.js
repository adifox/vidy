// Comnponents
import Image from 'next/image'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tag } from '../tag'
import { Avatar } from '../avatar'
import { PIXEL_IMAGE } from '../../shared'
// Styles
import {
  wrapperStyles,
  cardHeader,
  cardBodyStyles,
  cardContent,
  cardFooterStyles,
  tagStyles,
  thumbnailStyles,
  image,
  detailsStyles,
  lowerContent,
  avatarWrapper,
} from './videoCard.module.css'

const users = [{ user: 'L' }, { user: 'M' }, { user: 'P' }, { user: 'T' }]

export const VideoCard = ({ children, mediaName, description }) => {
  return (
    <div className={wrapperStyles}>
      <div className={thumbnailStyles}>
        <Image
          blurDataURL={PIXEL_IMAGE}
          src='/Images/video-call.jpg'
          alt='Vidy Logo'
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          className={image}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '8px',
            padding: '4px 8px',
            borderRadius: '16px',
            // backgroundColor: 'rgba(153, 213, 250, 90%)',
            backgroundColor: 'rgba(153, 213, 250)',
            fontSize: '12px',
          }}
        >
          04:31
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            // backgroundColor: 'rgba(153, 213, 250, 30%)',
            backgroundColor: 'rgba(153, 213, 250)',
            padding: '4px 8px',
            borderRadius: '50px',
            fontSize: '12px',
          }}
        >
          28 Jan 2022
        </div>
      </div>
      <div className={cardBodyStyles}>
        <div className={cardContent}>
          <div className={detailsStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginBottom: '8px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '20px',
                  color: 'rgb(29, 44, 60)',
                }}
              >
                {mediaName}
              </h3>
              {/* <div
                style={{
                  padding: '4px 8px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(153, 213, 250, 30%)',
                  fontSize: '12px',
                }}
              >
                04:31
              </div> */}
            </div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '500',
                lineHeight: '16px',
                color: 'rgb(29, 44, 60)',
              }}
            >
              {description}
            </p>
          </div>
        </div>
        <div className={lowerContent}>
          <div className={avatarWrapper}>
            {/* <div style={{ display: 'flex' }}>
              <div
                style={{
                  backgroundColor: 'rgba(153, 213, 250, 30%)',
                  padding: '4px 8px',
                  borderRadius: '50px',
                  fontSize: '12px',
                }}
              >
                28 Jan 2022
              </div>
            </div> */}
            {/* <div style={{ width: '16px' }} /> */}
            <div style={{ display: 'flex' }}>
              {users.map(({ user }, i) => (
                <Avatar key={i} user={user} i={i} />
              ))}
            </div>
          </div>
          <div className={cardFooterStyles}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPlay} />
                <span>3</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faMessage} />
                <span>23</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} />
                <span>10</span>
              </li>
            </ul>
            <Tag text='Training' />
          </div>
        </div>
      </div>
    </div>
  )
}
