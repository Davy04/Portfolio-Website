import styles from './Skills.module.css'

const groups = [
  {
    category: 'FRONTEND',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'CSS Modules', level: 90 },
      { name: 'Tailwind', level: 75 },
      { name: 'Vite', level: 85 },
    ],
  },
  {
    category: 'BACKEND',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'Prisma', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'REST API', level: 80 },
      { name: 'GraphQL', level: 50 },
    ],
  },
  {
    category: 'FERRAMENTAS',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 55 },
      { name: 'Figma', level: 80 },
      { name: 'Storybook', level: 70 },
      { name: 'Vitest', level: 65 },
      { name: 'GitHub Actions', level: 60 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 03</span>
          <h2 className={styles.sectionTitle}>SKILLS</h2>
        </div>

        <div className={styles.groups}>
          {groups.map(group => (
            <div key={group.category} className={styles.group}>
              <div className={styles.groupLabel}>{group.category}</div>
              <div className={styles.itemList}>
                {group.items.map(item => (
                  <div key={item.name} className={styles.item}>
                    <div className={styles.itemTop}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemLevel}>{item.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
