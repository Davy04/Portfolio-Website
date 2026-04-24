import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    name: 'ECOMMERCE DASHBOARD',
    tags: ['React', 'TypeScript', 'REST API'],
    description: 'Painel administrativo para gestão de pedidos e estoque com filtros dinâmicos.',
    image: '',
    link: '#',
  },
  {
    id: '02',
    name: 'FINANCE TRACKER',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    description: 'App de controle financeiro com categorização automática e relatórios mensais.',
    image: '',
    link: '#',
  },
  {
    id: '03',
    name: 'DESIGN SYSTEM',
    tags: ['React', 'Storybook', 'CSS Modules'],
    description: 'Biblioteca de componentes para produto SaaS com tokens de design e documentação.',
    image: '',
    link: '#',
  },
  {
    id: '04',
    name: 'CLI TASK MANAGER',
    tags: ['Node.js', 'TypeScript', 'SQLite'],
    description: 'Gerenciador de tarefas via linha de comando com projetos, tags e suporte a editor.',
    image: '',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionId}>// 02</span>
          <h2 className={styles.sectionTitle}>PROJETOS</h2>
        </div>

        <div className={styles.grid}>
          {projects.map(project => (
            <article key={project.id} className={styles.card}>
              <a href={project.link} className={styles.imageWrap}>
                {project.image ? (
                  <img src={project.image} alt={project.name} className={styles.image} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.placeholderId}>{project.id}_</span>
                    <span className={styles.placeholderLine} />
                    <span className={styles.placeholderLine} style={{ width: '60%' }} />
                    <span className={styles.placeholderLine} style={{ width: '40%' }} />
                  </div>
                )}
                <div className={styles.imageOverlay}>
                  <span className={styles.overlayLink}>→ VER PROJETO</span>
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
