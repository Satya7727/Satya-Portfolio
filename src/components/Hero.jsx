import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Open to opportunities
          </div>
          <h1 className={styles.heading}>
            <span className={styles.name}>Satya Prakash</span>
            <br />
            <span className={styles.accent}>Yadav</span>
          </h1>
          <p className={styles.sub}>
            Full-Stack Developer specializing in the MERN stack. Building scalable
            web apps, RESTful APIs, and seamless user experiences.
          </p>
          <div className={styles.btns}>
            <a
              href="https://github.com/Satya7727"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              View GitHub
            </a>
            <button
              className={styles.btnGhost}
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>SP</div>
          </div>
          <div className={`${styles.floatTag} ${styles.tag1}`}>⚡ MERN Stack</div>
          <div className={`${styles.floatTag} ${styles.tag2}`}>✦ JWT Auth</div>
          <div className={`${styles.floatTag} ${styles.tag3}`}>◆ REST APIs</div>
        </div>
      </div>
    </section>
  )
}
