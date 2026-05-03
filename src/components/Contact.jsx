import React from 'react'
import styles from './Contact.module.css'

const contacts = [
  {
    label: 'yadavsatyaprakash689@gmail.com',
    href: 'mailto:yadavsatyaprakash689@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Satya7727',
    icon: '⌥',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/spy8423',
    icon: 'in',
  },
  {
    label: '+91 84237 72718',
    href: 'tel:+918423772718',
    icon: '📞',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.wrap}>
          <p className={styles.label}>Let's connect</p>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.sub}>
            Looking for entry-level software development opportunities.
            <br />Let's build something great together.
          </p>
          <div className={styles.links}>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.pill}
              >
                <span className={styles.pillIcon}>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
