import styles from './Hero.module.css'
import { useLang } from '../../context/LanguageContext'

const content = {
  pt: {
    title: ['CONSTRUO', 'EXPERIÊNCIAS', 'INTERATIVAS', 'COM UNITY'],
    subtitle: 'Desenvolvedor Unity com foco em gameplay, UI e WebGL. Construo sistemas interativos prontos para produção, com atenção à performance e experiência real de uso.',
    cta: '> VER PROJETOS',
    status: 'STATUS: DISPONÍVEL PARA PROJETOS',
  },
  en: {
    title: ['BUILDING', 'INTERACTIVE', 'EXPERIENCES', 'WITH UNITY'],
    subtitle: 'Unity developer focused on gameplay, UI and WebGL. I build interactive systems ready for production, with attention to performance and real user experience.',
    cta: '> SEE PROJECTS',
    status: 'STATUS: AVAILABLE FOR PROJECTS',
  },
}

export default function Hero() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.label}>// INIT_SEQUENCE</div>

        <h1 className={styles.title}>
          {c.title[0]}<br />
          <span className={styles.accent}>{c.title[1]}</span><br />
          {c.title[2]}<br />
          <span className={styles.accent}>{c.title[3]}</span>
        </h1>

        <p className={styles.subtitle}>{c.subtitle}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.ctaPrimary}>{c.cta}</a>
          <a href="https://github.com/Davy04" target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
            GITHUB →
          </a>
        </div>

        <div className={styles.statusBar}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>{c.status}</span>
        </div>
      </div>

      <div className={styles.gridOverlay} aria-hidden="true" />
    </section>
  )
}
