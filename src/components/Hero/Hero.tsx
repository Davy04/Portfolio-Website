import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.label}>// INIT_SEQUENCE</div>

        <h1 className={styles.title}>
          CRIO<br />
          <span className={styles.accent}>EXPERIÊNCIAS</span><br />
          DIGITAIS QUE<br />
          <span className={styles.accent}>FUNCIONAM</span>
        </h1>

        <p className={styles.subtitle}>
          Desenvolvedor front-end focado em interfaces rápidas,<br />
          acessíveis e com atenção aos detalhes.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.ctaPrimary}>&gt; VER PROJETOS</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
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
