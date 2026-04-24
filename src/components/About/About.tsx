import styles from './About.module.css'

const skills = [
  {
    category: 'FRONTEND',
    items: ['React', 'TypeScript', 'Next.js', 'CSS Modules', 'Tailwind', 'Vite'],
  },
  {
    category: 'BACKEND',
    items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST API', 'GraphQL'],
  },
  {
    category: 'FERRAMENTAS',
    items: ['Git', 'Docker', 'Figma', 'Storybook', 'Vitest', 'GitHub Actions'],
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
          Hi! I'm <span className={styles.highlight}>Davy Woolley</span>, a{' '}
          <span className={styles.highlight}>Software Engineer</span> and{' '}
          <span className={styles.highlight}>Content Creator</span>.{' '}
          I build fast, accessible web interfaces with a strong focus on user experience
          and clean code. My work sits at the intersection of front-end engineering and
          product design — I care about the details that make interfaces feel right.
          Outside of coding, I create content around development, tools, and the craft
          of building things for the web.
        </p>

        <div className={styles.bottom}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>LOCALIZAÇÃO</span>
              <span className={styles.infoVal}>Brasil</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>EXPERIÊNCIA</span>
              <span className={styles.infoVal}>3+ anos</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>FOCO</span>
              <span className={styles.infoVal}>Front-end / UI</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoKey}>STATUS</span>
              <span className={styles.statusVal}>
                <span className={styles.dot} />
                Disponível
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
