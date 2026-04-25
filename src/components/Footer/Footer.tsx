import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>DAKA-LABS</span>
        <span className={styles.copy}>© 2026 — TODOS OS DIREITOS RESERVADOS</span>
        <span className={styles.version}>v1.0.0</span>
      </div>
    </footer>
  )
}
