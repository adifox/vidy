import {
  wrapperStyles,
  cardHeader,
  cardBodyStyles,
  cardContent,
  cardFooterStyles,
} from './projectCard.module.css'

export const ProjectCard = ({ projectName, color, children }) => {
  return (
    <div className={wrapperStyles} style={{ borderLeftColor: color }}>
      <div className={cardHeader}>
        <h4>{projectName}</h4>
      </div>
      <div className={cardBodyStyles}>
        <div className={cardContent}>{children}</div>
      </div>
    </div>
  )
}
