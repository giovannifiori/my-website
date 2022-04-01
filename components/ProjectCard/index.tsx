import React from 'react'
import Project from '../../types/Project'

import styles from './ProjectCard.module.scss'

type Props = {
  project: Project
}

const ProjectCard = ({project: {name, description, isClassified, link}}: Props) => (
    <div className={styles.container}>
      <h2>{name}{isClassified && <sup>[classified]</sup>}</h2>
      <p>{description}</p>
      {link && <a href={link} rel="nofollow noreferrer" target="_blank">Live project</a>}
    </div>
)

export default ProjectCard
