import React from 'react'
import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Languages',
    color: 'purple',
    skills: ['JavaScript', 'Java', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    color: 'green',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'Backend',
    color: 'pink',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    color: 'purple',
    skills: ['MongoDB', 'Mongoose','SQL'],
  },
  {
    category: 'Core Concepts',
    color: 'green',
    skills: ['Basics of DSA', 'JWT Auth', 'CRUD Ops', 'bcrypt'],
  },
  {
    category: 'Tools & Platforms',
    color: 'pink',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', ' Basic Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>What I work with</p>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={styles.card}>
              <p className={styles.cat}>{group.category}</p>
              <div className={styles.tags}>
                {group.skills.map((s) => (
                  <span key={s} className={`${styles.tag} ${styles[group.color]}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
