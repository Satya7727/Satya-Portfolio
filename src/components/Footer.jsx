import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Designed & Built by{' '}
        <span className={styles.name}>Satya Prakash Yadav</span> · Full-Stack Developer
      </p>
      <p className={styles.copy}>© {new Date().getFullYear()} · All rights reserved</p>
    </footer>
  )
}
