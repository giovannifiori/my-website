import React from 'react'
import type Project from '../../types/Project'

import styles from './ProjectCard.module.scss'

interface Props {
  project: Project
}

const ProjectCard = ({project: {name, description, isClassified, link}}: Props) => (
    <div className={styles.container}>
      <h3>{name}{isClassified && <sup>[classified]</sup>}</h3>
      <p>{description}</p>
      {link && <a href={link} rel="nofollow noreferrer" target="_blank">Live project</a>}
    </div>
)

export default ProjectCard
