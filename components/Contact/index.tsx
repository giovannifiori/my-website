import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Icon from '@components/UI/Icon'

import styles from './Contact.module.scss'

const Contact = () => (
  <section className={styles.container}>
    <a
      href="https://www.github.com/giovannifiori"
      target="_blank"
      rel="noreferrer"
    >
      <Icon which={BsGithub} size={32} />
    </a>
    <a
      href="https://www.linkedin.com/in/giovannifiori"
      target="_blank"
      rel="noreferrer"
    >
      <Icon which={BsLinkedin} size={32} />
    </a>
  </section>
)

export default Contact
