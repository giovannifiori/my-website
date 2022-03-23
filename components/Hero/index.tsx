import React, { ReactNode } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg'
import styles from './Hero.module.scss'

const Hero = () => (
    <section className={styles.container}>
        <div>
            <div className={styles.contentBlock}>
            <div className={styles.imageContainer}>
                <Image src={profilePic} alt="Picture of the author" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.contentInfo}>
                <p><b>Hello!</b> I'm</p>
                <span className={styles.name}>Giovanni Fiori</span>
                <p>A Software Engineer with more than 4 years of experience, based in Brazil;</p>
                <p>Specialized in Web but has also worked with Mobile;</p>
                <p>Graduated in Software Engineering from IComp - Universidade Federal do Amazonas;</p>
                <p>Currently is a Software Engineer at Jusbrasil connecting people to justice.</p>
            </div>
            </div>
        </div>
    </section>
)

export default Hero