import styles from './Contact.module.css'
import { useLang } from '../../context/LanguageContext'

const content = {
  pt: {
    title: 'CONTATO',
    sub: 'Tem um projeto para construir? Vamos conversar.',
    email: '> ENVIAR E-MAIL',
    github: '> GITHUB',
    linkedin: '> LINKEDIN',
  },
  en: {
    title: 'CONTACT',
    sub: "Have a project to build? Let's talk.",
    email: '> SEND EMAIL',
    github: '> GITHUB',
    linkedin: '> LINKEDIN',
  },
}

export default function Contact() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 04</span>
          <h2 className={styles.sectionTitle}>{c.title}</h2>
        </div>

        <p className={styles.sub}>{c.sub}</p>

        <div className={styles.links}>
          <a href="mailto:davywoolley@gmail.com" className={styles.ctaPrimary}>{c.email}</a>
          <a href="https://github.com/Davy04" target="_blank" rel="noreferrer" className={styles.ctaPrimary}>{c.github}</a>
          <a href="https://linkedin.com/in/davywoolley/" target="_blank" rel="noreferrer" className={styles.ctaPrimary}>{c.linkedin}</a>
        </div>
      </div>
    </section>
  )
}
