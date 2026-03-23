const featuredProject = {
  badge: 'Featured Project',
  title: 'Full Stack Project Showcase',
  description:
    'A polished full-stack web experience designed to highlight modern UI, backend connectivity, and clean project structure in one cohesive product.',
  stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Responsive UI'],
}

const projectCards = [
  {
    title: 'Android Mobile App',
    tag: 'Android',
    description:
      'A native app concept built with Kotlin and XML, focused on smooth mobile layouts and clear user flows.',
    stack: ['Android Studio', 'Kotlin', 'XML'],
  },
  {
    title: 'Backend API Project',
    tag: 'Backend',
    description:
      'A backend-focused project with route handling, database integration, and scalable logic using Node.js and MongoDB.',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'DSA Practice Archive',
    tag: 'Core CS',
    description:
      'A problem-solving focused collection that reflects my work with data structures, logic building, and algorithmic thinking.',
    stack: ['DSA', 'Algorithms', 'Problem Solving'],
  },
]

function WorkSection() {
  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <p className="section-kicker">Work</p>
        <h3>Selected work that reflects my development range and project style.</h3>
        <p className="section-intro">
          A mix of web, backend, mobile, and problem-solving projects that show how I
          approach building practical and polished software.
        </p>
      </div>

      <div className="work-layout">
        <article className="featured-work-card">
          <p className="featured-work-badge">{featuredProject.badge}</p>
          <h4>{featuredProject.title}</h4>
          <p className="featured-work-copy">{featuredProject.description}</p>

          <div className="work-stack">
            {featuredProject.stack.map((item) => (
              <span key={item} className="work-stack-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="work-links">
            <a href="/" onClick={(event) => event.preventDefault()}>
              Live Demo
            </a>
            <a href="/" onClick={(event) => event.preventDefault()}>
              Source Code
            </a>
          </div>
        </article>

        <div className="work-card-grid">
          {projectCards.map((project) => (
            <article key={project.title} className="work-card">
              <p className="work-card-tag">{project.tag}</p>
              <h4>{project.title}</h4>
              <p className="work-card-copy">{project.description}</p>

              <div className="work-stack">
                {project.stack.map((item) => (
                  <span key={item} className="work-stack-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
