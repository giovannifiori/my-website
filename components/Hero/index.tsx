import React from 'react'
import Image from 'next/image'
import signaturePic from '@public/images/signature.png'
import styles from './Hero.module.scss'

const Hero = () => (
  <section className={styles.container}>
    <div className={styles.contentBlock}>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src={signaturePic}
            alt="Author's signature"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.contentInfo}>
          <span className={styles.title}>Software Engineer</span>
        </div>
      </div>
      <div className={styles.textContent}>
        <p>
          Hi! I&apos;m Giovanni Fiori. A 25 years old Brazilian Software Engineer. I
          have a Bachelor&apos;s degree in Software Engineering from the Institute of
          Computing of the Federal University of Amazonas.
        </p>

        <p>
          Currently I&apos;m working as a Fullstack Web Developer at <a href="https://www.jusbrasil.com.br" target="_blank" rel="nofollow noreferrer">Jusbrasil</a> helping to
          reduce the justice gap in Brazil by providing meaningful and quality information to millions of people.
        </p>

        <p>
          I have 4+ years of experience, in which I&apos;ve developed Web apps, RESTful APIs and Mobile apps.
        </p>
      </div>
    </div>
  </section>
)

export default Hero
