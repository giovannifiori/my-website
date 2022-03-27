import React from 'react'

import styles from './SkillsRay.module.scss'

type SkillItemGroup = {
  title?: string,
  items: string[]
}

type Props = {
  title: string,
  items: SkillItemGroup[]
}

const SkillsRay = ({title, items = []}: Props) => {
  return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {items.map(({title: groupTitle, items: groupItems}, idx) => (
            <div key={idx} className={styles.itemsContainer}>
              {groupTitle && <h3 className={styles.groupTitle}>{groupTitle}</h3>}
              {groupItems.map((item, idx) => <p key={idx} className={styles.item}>{item}</p>)}
            </div>
        ))}
      </div>
  );
}

export default SkillsRay
