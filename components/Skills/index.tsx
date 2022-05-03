import React from 'react'
import Section from '@components/HomeSection'
import SkillsRay from '@components/SkillsRay'

import styles from './Skills.module.scss'

const Skills = () => (
  <Section title="Skills">
    <div className={styles.container}>
      <SkillsRay
        open
        title="Software Engineering"
        items={[
          {
            items: [
              'Solid knowledge of object-oriented programming (OOP) and its principles',
              'Design patterns',
              'Version control systems',
              'Experienced with SQL and NoSQL databases',
              'Containerization and orchestration of applications',
              'Knowledge about communication protocols',
              'Knowledge about messaging systems',
              'Experienced with agile methodologies',
              'Unit, integration and E2E testing',
            ],
          },
          {
            title: 'Techs and Tools',
            items: [
              'Languages: Javascript, Kotlin, Java, Python',
              'Git, Git Flow, GitHub, GitLab, Bitbucket',
              'MySQL, PostgreSQL',
              'MongoDB, Redis',
              'Apache Kafka',
              'Docker, Docker Compose',
              'Kubernetes',
            ],
          },
        ]}
      />
      <SkillsRay
        title="Fullstack Web Development"
        items={[
          {
            items: ['Front-end web apps', 'RESTful APIs'],
          },
          {
            title: 'Techs and Tools',
            items: [
              'Node.js, Express',
              'React.js, Redux',
              'GraphQL',
              'Next.js',
              'Jest, React Testing Library',
              'OpenAPI (Swagger)',
              'Cypress',
            ],
          },
        ]}
      />
      <SkillsRay
        title="Mobile Development"
        items={[
          {
            items: [
              'Native Android apps, embedded services, libraries and SDKs',
              'Cross-platform (Android/iOS) apps',
            ],
          },
          {
            title: 'Techs and Tools',
            items: [
              'Jetpack Library',
              'Jetpack Compose',
              'Gradle',
              'JUnit, Espresso',
              'Dagger Hilt',
              'React Native',
            ],
          },
        ]}
      />
    </div>
  </Section>
)

export default Skills
