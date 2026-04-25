import styles from './Skills.module.css'
import { useLang } from '../../context/LanguageContext'

const groups = {
  pt: [
    { category: 'UNITY / UI', items: ['Unity UI (uGUI)', 'TextMeshPro', 'DOTween', 'Responsive UI', 'WebGL'] },
    { category: 'BACKEND / C#', items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'WebSocket Integration', 'JSON / Serialization', 'Backend Integration'] },
    { category: 'FERRAMENTAS', items: ['Unity', 'Git / GitHub', 'API Testing', 'Rider'] },
  ],
  en: [
    { category: 'UNITY / UI', items: ['Unity UI (uGUI)', 'TextMeshPro', 'DOTween', 'Responsive UI', 'WebGL'] },
    { category: 'BACKEND / C#', items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'WebSocket Integration', 'JSON / Serialization', 'Backend Integration'] },
    { category: 'TOOLS', items: ['Unity', 'Git / GitHub', 'API Testing', 'Rider'] },
  ],
}

export default function Skills() {
  const { lang } = useLang()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 03</span>
          <h2 className={styles.sectionTitle}>SKILLS</h2>
        </div>

        <div className={styles.groups}>
          {groups[lang].map(group => (
            <div key={group.category} className={styles.group}>
              <div className={styles.groupLabel}>{group.category}</div>
              <div className={styles.tagList}>
                {group.items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
