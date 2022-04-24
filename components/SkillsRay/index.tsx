import React from 'react'

import styles from './SkillsRay.module.scss'

interface SkillItemGroup {
  title?: string
  items: string[]
}

interface Props {
  title: string
  items: SkillItemGroup[]
  open?: boolean
}

const SkillsRay = ({ title, items = [], open }: Props) => {
  return (
    <details open={open} className={styles.container}>
      <summary className={styles.title}>{title}</summary>
      <div className={styles.content}>
        {items.map(({ title: groupTitle, items: groupItems }, idx) => (
          <div key={idx}>
            {groupTitle && <h3 className={styles.groupTitle}>{groupTitle}</h3>}
            {groupItems.map((item, idx) => (
              <p key={idx} className={styles.item}>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </details>
  )
}

export default SkillsRay
