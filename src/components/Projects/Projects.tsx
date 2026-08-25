import styles from './Projects.module.css'
import { useLang } from '../../context/LanguageContext'

const projects = {
  pt: [
    {
      id: '01',
      name: 'BULLET CRASH',
      tags: ['Unity', 'C#', 'WebGL'],
      description: 'Roguelite 2D top-down de sobrevivência: hordas crescentes de inimigos, tiro automático e upgrades escolhidos a cada nível para montar builds diferentes a cada partida.',
      image: 'bullet-crash.png',
      link: 'https://davy04.itch.io/bullet-crash',
    },
    {
      id: '02',
      name: 'SOCCER SHOWDOWN',
      tags: ['Unity', 'C#', 'WebGL'],
      description: 'Futebol arcade 1v1 com física exagerada, partidas rápidas e chutes especiais. Duelos diretos em campo reduzido, com controles simples e alto ritmo.',
      image: 'soccer-showdown.png',
      link: 'https://davy04.itch.io/soccer-showdown',
    },
    {
      id: '03',
      name: 'APOCALIPSE',
      tags: ['Unity', 'C#', 'WebGL'],
      description: 'Jogo de sobrevivência top-down com sistemas de combate e ondas de inimigos.',
      image: 'apocalipse.png',
      link: 'https://davy04.itch.io/apocalipse',
    },
  ],
  en: [
    {
      id: '01',
      name: 'BULLET CRASH',
      tags: ['Unity', 'C#', 'WebGL'],
      description: '2D top-down survival roguelite: escalating enemy hordes, auto-firing weapons and level-up upgrades that build a different run every time.',
      image: 'bullet-crash.png',
      link: 'https://davy04.itch.io/bullet-crash',
    },
    {
      id: '02',
      name: 'SOCCER SHOWDOWN',
      tags: ['Unity', 'C#', 'WebGL'],
      description: 'Arcade 1v1 soccer with exaggerated physics, fast matches and special shots. Head-to-head duels on a small pitch, simple controls and high pace.',
      image: 'soccer-showdown.png',
      link: 'https://davy04.itch.io/soccer-showdown',
    },
    {
      id: '03',
      name: 'APOCALIPSE',
      tags: ['Unity', 'C#', 'WebGL'],
      description: 'Top-down survival game with combat systems and enemy waves.',
      image: 'apocalipse.png',
      link: 'https://davy04.itch.io/apocalipse',
    },
  ],
}

const labels = {
  pt: { title: 'PROJETOS', viewProject: '→ VER PROJETO' },
  en: { title: 'PROJECTS', viewProject: '→ VIEW PROJECT' },
}

export default function Projects() {
  const { lang } = useLang()
  const list = projects[lang]
  const l = labels[lang]

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 02</span>
          <h2 className={styles.sectionTitle}>{l.title}</h2>
        </div>

        <div className={styles.grid}>
          {list.map(project => (
            <article key={project.id} className={styles.card}>
              <a href={project.link} className={styles.imageWrap} target="_blank" rel="noreferrer">
                {project.image ? (
                  <img src={import.meta.env.BASE_URL + project.image} alt={project.name} className={styles.image} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.placeholderId}>{project.id}_</span>
                    <span className={styles.placeholderLine} />
                    <span className={styles.placeholderLine} style={{ width: '60%' }} />
                    <span className={styles.placeholderLine} style={{ width: '40%' }} />
                  </div>
                )}
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayLink}>{l.viewProject}</span>
                </div>
              </a>

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{project.name}</h3>
                  <span className={styles.cardId}>{project.id}</span>
                </div>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
