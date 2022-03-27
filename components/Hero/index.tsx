import React from 'react'
import Image from 'next/image'
import signaturePic from '../../public/images/signature.png'
import styles from './Hero.module.scss'

const Hero = () => (
    <section className={styles.container}>
        <div className={styles.contentBlock}>
            <div className={styles.imageContainer}>
                <Image src={signaturePic} alt="Author's signature" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.contentInfo}>
                <span className={styles.title}>Software Engineer</span>
            </div>
        </div>
    </section>
)

export default Hero
