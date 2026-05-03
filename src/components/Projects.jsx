import React from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01 — Featured Project',
    title: 'Stock Trading App',
    subtitle: 'Zerodha Clone',
    desc: 'A full-stack stock trading platform with real-time market data, interactive dashboards, and secure trading features.',
    highlights: [
      'Integrated EODHD API for live market data',
      'JWT + bcrypt secure authentication',
      'Drag-and-drop trading UI features',
      'Orders, holdings & portfolio tracking',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt'],
    live: 'https://stock-trading-app-amber.vercel.app/',
    github: 'https://github.com/Satya7727/Stock-Trading-App',
  },
  {
    num: '02 — AI Project',
    title: 'Prajna-AI Chatbot',
    subtitle: 'Gemini-powered AI',
    desc: 'A responsive AI chatbot powered by Gemini API with a scalable backend for real-time intelligent conversations.',
    highlights: [
      'Gemini API for intelligent responses',
      'Optimized API handling for speed',
      'Scalable multi-query backend',
      'Fully responsive React frontend',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'Gemini API'],
    live: 'https://prajna-ai-yhy3.onrender.com',
    github: 'https://github.com/Satya7727/Prajna-AI.git',
  },
  {
    num: '03 — Full-Stack Platform',
    title: 'Wanderlust',
    subtitle: 'Airbnb-inspired Rental',
    desc: 'A home rental platform with user authentication, image uploads, interactive maps, and complete listing management.',
    highlights: [
      'User auth, sessions & authorization',
      'Cloudinary for image uploads',
      'Mapbox location services',
      'Full CRUD listing management',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Mapbox', 'EJS'],
    live: 'https://wanderlust-rmq9.onrender.com',
    github: 'https://github.com/Satya7727/WanderLust.git',
  },
]

const stackColor = (s) => {
  const greenSet = new Set(['React.js', 'HTML5', 'CSS3', 'Cloudinary', 'Gemini API'])
  const pinkSet = new Set(['Node.js', 'Express.js', 'Mapbox', 'EJS'])
  if (greenSet.has(s)) return 'green'
  if (pinkSet.has(s)) return 'pink'
  return 'purple'
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>What I've built</p>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <p className={styles.num}>{p.num}</p>
              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectSub}>{p.subtitle}</p>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.highlights}>
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className={styles.stack}>
                {p.stack.map((s) => (
                  <span key={s} className={`${styles.tag} ${styles[stackColor(s)]}`}>
                    {s}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.linkBtn} ${styles.primary}`}
                >
                  Live Demo ↗
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
