import styles from './About.module.css'

const skills = [
  {
    category: 'UNITY / UI',
    items: ['Unity UI (uGUI)', 'TextMeshPro', 'DOTween', 'Responsive UI', 'WebGL'],
  },
  {
    category: 'BACKEND / C#',
    items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'WebSocket', 'JSON / Serialization'],
  },
  {
    category: 'FERRAMENTAS',
    items: ['Unity', 'Git / GitHub', 'Rider'],
  },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 01</span>
          <h2 className={styles.sectionTitle}>SOBRE</h2>
        </div>

        <p className={styles.bio}>
          Sou <span className={styles.highlight}>Davy Woolley</span>, desenvolvedor de jogos especializado em{' '}
          <span className={styles.highlight}>Unity</span> e{' '}
          <span className={styles.highlight}>C#</span>.{' '}
          Tenho experiência criando sistemas de gameplay, interfaces e integrações com backend,
          com foco em performance e entrega final. Trabalho principalmente com projetos voltados
          para <span className={styles.highlight}>WebGL</span> e aplicações interativas que precisam
          rodar bem fora do ambiente ideal. Busco sempre desenvolver soluções estáveis,
          escaláveis e prontas para produção.
        </p>

        <div className={styles.bottom}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>LOCALIZAÇÃO</span>
              <span className={styles.infoVal}>Recife, Brasil</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>EXPERIÊNCIA</span>
              <span className={styles.infoVal}>3+ anos</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>FOCO</span>
              <span className={styles.infoVal}>Unity, C#, WebGL, iGaming</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>STATUS</span>
              <span className={styles.statusVal}>
                <span className={styles.dot} />
                Aberto a propostas
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
