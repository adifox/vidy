import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '../button'
import { ProjectCard } from '../project-card'
import {
  wrappingStyles,
  formStyles,
  formButtonStyles,
  previewBoxStyles,
  previewContainerStyles,
  projectCardWrapperStyles,
  cardsListWrapperStyles,
  createdProjectsBoxStyles,
} from './projectForm.module.css'

const INITIAL_VALUES = {
  projectName: 'Project Name',
  selectBorder: '#000',
}

export const ProjectForm = ({ addProject, projects }) => {
  const [animationParent] = useAutoAnimate()
  const [values, setValues] = useState(INITIAL_VALUES)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('SAVING', values)
    setValues(INITIAL_VALUES)
    addProject([...projects, values])
  }

  return (
    <div className={wrappingStyles}>
      <form className={formStyles} onSubmit={handleSubmit}>
        <h2>Add a new project</h2>
        <label>Project Name</label>
        <input
          onChange={handleChange}
          name='projectName'
          value={values.projectName}
        />
        <label>Pick a color</label>
        <select
          onChange={handleChange}
          name='selectBorder'
          value={values.selectBorder}
        >
          <option value='#000000'>Black</option>
          <option value='#EE6B3B'>Orange</option>
          <option value='#A02C5D'>Purple</option>
          <option value='#FBBF54'>Yellow</option>
          <option value='#097353'>Green</option>
          <option value='#045459'>Dark Green</option>
          <option value='#022C7A'>Blue</option>
        </select>
        <Button className={formButtonStyles} type='submit'>
          Save
        </Button>
      </form>
      <div className={previewBoxStyles}>
        <h2>Preview</h2>
        <div className={previewContainerStyles}>
          <ProjectCard
            projectName={values.projectName}
            color={values.selectBorder}
          />
        </div>
      </div>
      <div className={createdProjectsBoxStyles}>
        <h2>Created Projects</h2>
        <ul ref={animationParent} className={cardsListWrapperStyles}>
          {projects.map(({ projectName, selectBorder }, index) => (
            <li key={index} className={projectCardWrapperStyles}>
              <ProjectCard projectName={projectName} color={selectBorder} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
