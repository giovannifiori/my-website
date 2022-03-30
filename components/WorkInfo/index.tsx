import React, {ReactNode} from 'react'

import styles from './WorkInfo.module.scss'

type Props = {
  company: string,
  role: string,
  timeSpan: string,
  children: ReactNode,
}

const WorkInfo = ({company, role, timeSpan, children}: Props) => (
    <div className={styles.container}>
      <h2 className={styles.title}>{role} &#8212; {company}</h2>
      <span className={styles.timeSpan}>{timeSpan}</span>
      <div className={styles.content}>
        {children}
      </div>
    </div>
)

export default WorkInfo
