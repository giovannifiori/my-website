import React, {ReactNode} from 'react'

import styles from './Section.module.scss'

type Props = {
    title: string,
    children: ReactNode
}

const Section = ({title, children}: Props) => {
    const sectionTitleId = `${title}-heading`;
    return (
        <section className={styles.container} aria-labelledby={sectionTitleId}>
            <h2 id={sectionTitleId} className={styles.title}>{title}</h2>
            <div className={styles.main}>
                {children}
            </div>
            <span className={styles.ending}>{title}</span>
        </section>
    )
}

export default Section
