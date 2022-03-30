import React from 'react'
import Section from '../HomeSection'

import styles from './Experience.module.scss'
import WorkInfo from "../WorkInfo";

const Experience = () => (
    <Section title="experience">
      <div className={styles.container}>
        <WorkInfo role="Software Engineer" company="Jusbrasil" timeSpan="Jun. 2021 - Now">
          <p>As a software engineer of the <strong>Lawsuit Motions</strong> team, was responsible for the maintenance
            and development of new features related to this product, on the final steps of our document processing
            pipeline, ensuring that the artifacts are ready for consumption by our final user.</p>
        </WorkInfo>
        <WorkInfo
            role="Software Developer"
            company="Sidia Instituto de Ciência e Tecnologia"
            timeSpan="Apr. 2018 - Jun. 2021"
        >
          <p>As a developer of the <strong>Solutions</strong> team, has developed a variety of Web and native Android
            applications, SDKs and libraries.</p>
          <p>Participated in small and big teams. Always in a agile environment.</p>
        </WorkInfo>
        <WorkInfo
            role="Software Developer (Intern)"
            company="Flex Imp. Exp. de Máq. e Mot. Ltda"
            timeSpan="Nov. 2017 - Apr. 2018"
        >
          <p>As the main web developer in the IT department, was responsible for maintaining the factory&apos;s internal
            tracking software while also developed a new version of it from scratch aiming to improve usability,
            performance and security.</p>
        </WorkInfo>
      </div>
    </Section>
)

export default Experience
