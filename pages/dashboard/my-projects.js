import { ProjectsContainer } from '../../components/containers/projects-container'

export default function MyProjects() {
  const projects = [
    {
      projectName: 'Fan Project',
      selectBorder: '#EE6B3B',
    },
    {
      projectName: 'Onboarding',
      selectBorder: '#097353',
    },
    {
      projectName: 'Training',
      selectBorder: '#A02C5D',
    },
  ]
  return (
    <div>
      <ProjectsContainer projects={projects} />
    </div>
  )
}
