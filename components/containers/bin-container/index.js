import { faTrashRestore } from '@fortawesome/free-solid-svg-icons/faTrashRestore'
import { EmptyAreaInfo } from '../../ui-components/empty-area-info'
import { binContainerStyles } from './binContainer.module.css'

export const BinContainer = () => {
  return (
    <>
      <div className={binContainerStyles}>
        <EmptyAreaInfo
          icon={faTrashRestore}
          text='Here you can find all your deleted content.'
        />
      </div>
    </>
  )
}
