import { faVideoSlash } from '@fortawesome/free-solid-svg-icons/faVideoSlash'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
import { settingsContainer } from './settingsContainer.module.css'

export const SettingsContainer = () => {
  return (
    <>
      <div className={settingsContainer}>
        <EmptyAreaInfo
          icon={faGears}
          text='Here you can modify your settings.'
        />
      </div>
    </>
  )
}
