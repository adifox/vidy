import { tagStyles } from './tag.module.css'

export const Tag = ({ text }) => {
  return (
    <div className={tagStyles}>
      <span>#{text}</span>
    </div>
  )
}
