import styles from './About.module.css'
import { useLang } from '../../context/LanguageContext'

const skillGroups = {
  pt: [
    { category: 'UNITY / UI', items: ['Unity UI (uGUI)', 'TextMeshPro', 'DOTween', 'Responsive UI', 'WebGL'] },
    { category: 'BACKEND / C#', items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'WebSocket', 'JSON / Serialization'] },
    { category: 'FERRAMENTAS', items: ['Unity', 'Git / GitHub', 'Rider'] },
  ],
  en: [
    { category: 'UNITY / UI', items: ['Unity UI (uGUI)', 'TextMeshPro', 'DOTween', 'Responsive UI', 'WebGL'] },
    { category: 'BACKEND / C#', items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'WebSocket', 'JSON / Serialization'] },
    { category: 'TOOLS', items: ['Unity', 'Git / GitHub', 'Rider'] },
  ],
}

const info = {
  pt: { title: 'SOBRE', location: 'LOCALIZAÇÃO', experience: 'EXPERIÊNCIA', focus: 'FOCO', status: 'STATUS', statusVal: 'Aberto a propostas' },
  en: { title: 'ABOUT', location: 'LOCATION', experience: 'EXPERIENCE', focus: 'FOCUS', status: 'STATUS', statusVal: 'Open to proposals' },
}

export default function About() {
  const { lang } = useLang()
  const i = info[lang]
  const skills = skillGroups[lang]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 01</span>
          <h2 className={styles.sectionTitle}>{i.title}</h2>
        </div>

        <p className={styles.bio}>
          {lang === 'pt' ? (
            <>
              Sou <span className={styles.highlight}>Davy Woolley</span>, desenvolvedor de jogos especializado em{' '}
              <span className={styles.highlight}>Unity</span> e{' '}
              <span className={styles.highlight}>C#</span>.{' '}
              Tenho experiência criando sistemas de gameplay, interfaces e integrações com backend,
              com foco em performance e entrega final. Trabalho principalmente com projetos voltados
              para <span className={styles.highlight}>WebGL</span> e aplicações interativas que precisam
              rodar bem fora do ambiente ideal. Busco sempre desenvolver soluções estáveis,
              escaláveis e prontas para produção.
            </>
          ) : (
            <>
              I'm <span className={styles.highlight}>Davy Woolley</span>, a game developer specialized in{' '}
              <span className={styles.highlight}>Unity</span> and{' '}
              <span className={styles.highlight}>C#</span>.{' '}
              I have experience building gameplay systems, interfaces and backend integrations,
              focused on performance and final delivery. I mainly work with{' '}
              <span className={styles.highlight}>WebGL</span> projects and interactive applications
              that need to run well outside the ideal environment. I always aim to deliver stable,
              scalable and production-ready solutions.
            </>
          )}
        </p>

        <div className={styles.bottom}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>{i.location}</span>
              <span className={styles.infoVal}>Recife, Brasil</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>{i.experience}</span>
              <span className={styles.infoVal}>3+ anos</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>{i.focus}</span>
              <span className={styles.infoVal}>Unity, C#, WebGL, iGaming</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>{i.status}</span>
              <span className={styles.statusVal}>
                <span className={styles.dot} />
                {i.statusVal}
              </span>
            </div>
          </div>

          <div className={styles.skillsPanel}>
            {skills.map(group => (
              <div key={group.category} className={styles.skillGroup}>
                <span className={styles.groupLabel}>
                  <span className={styles.prompt}>&gt;</span> {group.category}
                </span>
                <div className={styles.tagList}>
                  {group.items.map(item => (
                    <span key={item} className={styles.tag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
