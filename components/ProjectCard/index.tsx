import React from 'react'
import type Project from '@customTypes/Project'

import styles from './ProjectCard.module.scss'

interface Props {
  project: Project
}

const ProjectCard = ({
  project: { name, description, link },
}: Props) => (
  <div className={styles.container}>
    <h3>{name}</h3>
    <p>{description}</p>
    {link && (
      <a href={link} rel="nofollow noreferrer" target="_blank">
        Live
      </a>
    )}
  </div>
)

export default ProjectCard
