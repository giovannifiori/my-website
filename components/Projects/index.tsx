import React from 'react'
import Section from '@components/HomeSection'
import ProjectCard from '@components/ProjectCard'
import type Project from '@customTypes/Project'

import styles from './Projects.module.scss'

interface Props {
  projects: Project[]
}

const Projects = ({ projects }: Props) => (
  <Section title="Projects">
    <div className={styles.content}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </Section>
)

export default Projects
