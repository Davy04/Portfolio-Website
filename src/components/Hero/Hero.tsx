import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.label}>// INIT_SEQUENCE</div>

        <h1 className={styles.title}>
          CONSTRUO<br />
          <span className={styles.accent}>EXPERIÊNCIAS</span><br />
          INTERATIVAS<br />
          <span className={styles.accent}>COM UNITY</span>
        </h1>

        <p className={styles.subtitle}>
          Desenvolvedor Unity com foco em gameplay, UI e WebGL.<br />
          Construo sistemas interativos prontos para produção,<br />
          com atenção à performance e experiência real de uso.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.ctaPrimary}>&gt; VER PROJETOS</a>
          <a href="https://github.com/Davy04" target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
            GITHUB →
          </a>
        </div>

        <div className={styles.statusBar}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>STATUS: DISPONÍVEL PARA PROJETOS</span>
        </div>
      </div>

      <div className={styles.gridOverlay} aria-hidden="true" />
    </section>
  )
}
