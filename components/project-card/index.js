import {
  wrapperStyles,
  cardHeader,
  cardBodyStyles,
  cardContent,
  cardFooterStyles,
} from './projectCard.module.css'

export const ProjectCard = ({ projectName, color }) => {
  return (
    <div className={wrapperStyles}>
      <div className={cardHeader} style={{ backgroundColor: color }}>
        <h4>{projectName}</h4>
      </div>
      <div className={cardBodyStyles}>
        <div className={cardContent}></div>
        <div className={cardFooterStyles}>Card Footer</div>
      </div>
    </div>
  )
}
