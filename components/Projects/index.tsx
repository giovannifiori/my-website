import React from 'react'
import Section from '../HomeSection'
import ProjectCard from '../ProjectCard'
import type Project from '../../types/Project'

import styles from './Projects.module.scss'

interface Props {
  projects: Project[]
}

const Projects = ({ projects }: Props) => (
  <Section title="projects">
    <div className={styles.content}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </Section>
)

export default Projects
