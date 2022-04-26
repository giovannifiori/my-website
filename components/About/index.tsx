import React from 'react'
import Section from '@components/HomeSection'

import styles from './About.module.scss'

const About = () => (
  <Section title="about">
    <div className={styles.textContent}>
      <p>
        My name is Giovanni Fiori. I&apos;m 24 years old and I live in Brazil. I
        have a Bachelor&apos;s degree in Software Engineering from IComp -
        Universidade Federal do Amazonas.
      </p>

      <p>
        Currently I&apos;m a Fullstack Software Engineer at Jusbrasil helping to
        reduce the justice gap in Brazil by providing meaningful and quality
        information to millions of people.
      </p>

      <p>
        I have more than 4 years of experience in Software Engineering, where
        the majority of the time I&apos;ve developed web apps and APIs. I also
        had a lot of experience in projects for Mobile, specifically for the
        Android platform when working for a Samsung&apos;s R&amp;D institute.
      </p>

      <p>You can see more about my skills on the next sections &#x1f609;</p>
    </div>
  </Section>
)

export default About
