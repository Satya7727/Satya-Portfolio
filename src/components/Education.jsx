import React from 'react'
import styles from './Education.module.css'

const items = [
  {
    icon: '🎓',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'SRMCEM, Lucknow',
    detail: 'CGPA: 7.2 (till 5th Semester) · Expected Graduation: 2027',
    accent: 'purple',
  },
  {
    icon: '📜',
    degree: 'Full Stack Web Development Bootcamp',
    school: 'Apna College',
    detail: 'Completed: March 2025 · HTML, CSS, JS, React, Node, Express, MongoDB',
    accent: 'green',
  },
]

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Background</p>
        <h2 className={styles.title}>Education & Certifications</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.degree} className={`${styles.card} ${styles[item.accent]}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.school}>{item.school}</p>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          ))}
        </div>

        <div className={styles.traits}>
          <p className={styles.traitsTitle}>Personal & Academic Traits</p>
          <div className={styles.traitsList}>
            {[
              'Strong understanding of SDLC',
              'Passionate about scalable, user-centric apps',
              'Active learner exploring modern web tech & AI integrations',
            ].map((t) => (
              <div key={t} className={styles.trait}>
                <span className={styles.traitDot} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
