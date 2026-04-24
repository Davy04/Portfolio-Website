import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 04</span>
          <h2 className={styles.sectionTitle}>CONTATO</h2>
        </div>

        <p className={styles.sub}>
          Tem um projeto para construir? Vamos conversar.
        </p>

        <div className={styles.links}>
          <a href="mailto:davywoolley@gmail.com" className={styles.ctaPrimary}>
            &gt; ENVIAR E-MAIL
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>
            GITHUB →
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.link}>
            LINKEDIN →
          </a>
        </div>
      </div>
    </section>
  )
}
