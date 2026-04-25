import { useState } from 'react'
import styles from './Header.module.css'
import { useLang } from '../../context/LanguageContext'

const navHrefs = ['#about', '#projects', '#contact']
const navLabels = {
  pt: ['SOBRE', 'PROJETOS', 'CONTATO'],
  en: ['ABOUT', 'PROJECTS', 'CONTACT'],
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLang()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          DAKA-LABS <span className={styles.build}>[BUILD]</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLabels[lang].map((label, i) => (
            <a
              key={label}
              href={navHrefs[i]}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button onClick={toggle} className={styles.langToggle} aria-label="Trocar idioma">
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
