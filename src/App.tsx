import { useState } from 'react'
import { profile, impact, about, experience, projects, skills } from './content'

const nav = [
  ['#about', 'About'],
  ['#projects', 'Projects'],
  ['#experience', 'Experience'],
  ['#skills', 'Skills'],
  ['#contact', 'Contact'],
]

const ext = { target: '_blank', rel: 'noopener noreferrer' }
const img = (file: string) => import.meta.env.BASE_URL + file

type P = (typeof projects)[number]

// The first project is the one featured next to the name.
const featured = projects[0]

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Tech stack">
      {items.map(t => <li key={t}>{t}</li>)}
    </ul>
  )
}

// Drawn previews for projects without a screenshot.
function Preview({ kind }: { kind: string }) {
  if (kind === 'csv') {
    return (
      <div className="preview preview-csv" aria-hidden="true">
        <div className="csv-row csv-head"><span>key</span><span>en</span><span>pt-BR</span><span>es</span></div>
        <div className="csv-row"><span>play</span><span>Play</span><span>Jogar</span><span>Jugar</span></div>
        <div className="csv-row"><span>win</span><span>You win!</span><span>Você venceu!</span><span>¡Ganaste!</span></div>
        <div className="csv-row"><span>coins</span><span>Coins</span><span>Moedas</span><span className="csv-miss">en</span></div>
      </div>
    )
  }
  return (
    <div className="preview preview-titles" aria-hidden="true">
      <span>10+</span>
    </div>
  )
}

function Media({ p }: { p: P }) {
  return (
    <a href={p.links[0].href} {...ext} className="media" tabIndex={-1} aria-hidden="true">
      {p.image ? <img src={img(p.image)} alt="" loading="lazy" /> : <Preview kind={p.preview!} />}
    </a>
  )
}

function Stats({ p }: { p: P }) {
  if (!p.stats) return null
  return (
    <dl className="stats">
      {p.stats.map(([value, label]) => (
        <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
      ))}
    </dl>
  )
}

function FeaturedCard() {
  const link = featured.links[0]
  return (
    <article className="card featured" aria-labelledby="featured-title">
      <Media p={featured} />
      <div className="card-body">
        <p className="featured-label">Latest project</p>
        <div className="title-row">
          <h2 id="featured-title">{featured.title}</h2>
          <a className="btn btn-sm" href={link.href} {...ext}>{link.label} ↗</a>
        </div>
        <Stats p={featured} />
        <Tags items={featured.tags} />
      </div>
    </article>
  )
}

function ProjectCard({ p }: { p: P }) {
  return (
    <article className="card">
      <Media p={p} />
      <div className="card-body">
        <div className="title-row">
          <h3>{p.title}</h3>
          <span className="badge">{p.badge}</span>
        </div>
        <p className="muted">{p.description}</p>
        <Stats p={p} />
        <Tags items={p.tags} />
        <p className="links">
          {p.links.map(l => <a key={l.href} href={l.href} {...ext}>{l.label} ↗</a>)}
        </p>
      </div>
    </article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo">Davy Woolley</a>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" aria-label="Main" className={menuOpen ? 'nav open' : 'nav'}>
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href={profile.resume} {...ext} className="nav-cta">Resume</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-inner">
              <div>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="headline">{profile.headline}</p>
                <p className="lede">{profile.intro}</p>
                <div className="actions">
                  <a className="btn btn-primary" href={profile.resume} {...ext}>Download resume</a>
                  <a className="btn" href={profile.github} {...ext}>GitHub</a>
                  <a className="btn" href={profile.linkedin} {...ext}>LinkedIn</a>
                </div>
                <p className="status"><span className="dot" aria-hidden="true" />Open to remote work, {profile.location} (GMT-3)</p>
              </div>
              <FeaturedCard />
            </div>
            <dl className="impact">
              {impact.map(i => (
                <div key={i.label}><dt>{i.label}</dt><dd>{i.value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <Section id="about" title="About me">
          <div className="about">
            <div className="about-text">
              {about.paragraphs.map(p => <p key={p}>{p}</p>)}
            </div>
            <dl className="facts">
              {about.facts.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="project-grid">
            {projects.map(p => <ProjectCard key={p.title} p={p} />)}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map(job => (
              <li key={job.company + job.period} className="job">
                <p className="job-when">{job.period}<span>{job.location}</span></p>
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-org">
                    {job.url ? <a href={job.url} {...ext}>{job.company}</a> : job.company}
                    <span className="muted">, {job.type}</span>
                  </p>
                  <ul className="highlights">
                    {job.highlights.map(h => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills">
            {skills.map(s => (
              <div key={s.group} className="card">
                <div className="card-body">
                  <h3>{s.group}</h3>
                  <Tags items={s.items} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="contact-lede">Hiring, or have a project in mind? Email is the fastest way to reach me.</p>
          <a className="contact-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="links">
            <a href={profile.linkedin} {...ext}>LinkedIn ↗</a>
            <a href={profile.github} {...ext}>GitHub ↗</a>
            <a href={profile.resume} {...ext}>Resume (PDF) ↗</a>
          </p>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 {profile.name}</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  )
}
