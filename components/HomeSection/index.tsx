import React, {ReactNode} from 'react'

import styles from './Section.module.scss'

type Props = {
    title: string,
    children: ReactNode
}

const Section = ({title, children}: Props) => (
    <section className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.main}>
            {children}
        </div>
        <span className={styles.ending}>{title}</span>
    </section>
)

export default Section
