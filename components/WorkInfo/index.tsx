import React from 'react'
import type { ReactNode } from 'react'

import styles from './WorkInfo.module.scss'

interface Props {
  company: string
  role: string
  timeSpan: string
  children: ReactNode
}

const WorkInfo = ({ company, role, timeSpan, children }: Props) => (
  <div className={styles.container}>
    <h3 className={styles.title}>
      {role} &#8212; {company}
    </h3>
    <span className={styles.timeSpan}>{timeSpan}</span>
    <div className={styles.content}>{children}</div>
  </div>
)

export default WorkInfo
