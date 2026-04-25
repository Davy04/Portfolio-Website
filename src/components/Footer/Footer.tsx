import styles from './Footer.module.css'
import { useLang } from '../../context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>DAKA-LABS</span>
        <span className={styles.copy}>
          {lang === 'pt' ? '© 2026 — TODOS OS DIREITOS RESERVADOS' : '© 2026 — ALL RIGHTS RESERVED'}
        </span>
        <span className={styles.version}>v1.0.0</span>
      </div>
    </footer>
  )
}
