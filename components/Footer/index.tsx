import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.container}>
    <small>
      &copy; {new Date().getFullYear()} Giovanni Fiori. All rights reserved.
    </small>
  </footer>
)

export default Footer
