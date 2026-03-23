const quickStats = [
  { value: 'Frontend + Backend', label: 'Full Stack Development' },
  { value: 'Mobile Apps', label: 'Android Studio, Kotlin, XML' },
  { value: 'Core Strength', label: 'Data Structures & Algorithms' },
]

const aboutPoints = [
  {
    title: 'Development Mindset',
    copy:
      'I enjoy building software that is practical, visually polished, and structured in a way that stays maintainable as it grows.',
  },
  {
    title: 'What I Work With',
    copy:
      'My experience spans frontend interfaces, backend logic, MongoDB-powered applications, Android development, and problem solving with data structures and algorithms.',
  },
]

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <p className="section-kicker">About</p>
        <h3>I like building software that feels modern, useful, and thoughtfully crafted.</h3>
        <p className="section-intro">
          I am Krish Raj, a software developer with interests across full-stack web
          development, backend systems, Android app development, and problem solving. I
          enjoy learning by building and turning ideas into projects that are clean,
          functional, and visually sharp.
        </p>

        <div className="about-points">
          {aboutPoints.map((item) => (
            <article key={item.title} className="about-point">
              <p className="about-point-title">{item.title}</p>
              <p className="about-point-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-panel">
        <div className="about-panel-frame">
          <p className="about-panel-label">Snapshot</p>
          <div className="about-stats">
            {quickStats.map((item) => (
              <article key={item.label} className="about-stat">
                <p className="about-stat-value">{item.value}</p>
                <p className="about-stat-label">{item.label}</p>
              </article>
            ))}
          </div>
          <p className="about-panel-note">
            Focused on building projects that combine strong logic, clear user experience,
            and scalable code.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
