const skillGroups = [
  {
    title: 'Frontend',
    label: 'Crafting interfaces that feel fast, expressive, and dependable.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive UI', 'Accessibility'],
  },
  {
    title: 'Backend',
    label: 'Building server-side logic, APIs, and database-connected applications.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Backend Logic', 'Database Design'],
  },
  {
    title: 'Core CS',
    label: 'Applying strong problem-solving skills and fundamentals to write better code.',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Logic Building', 'Code Optimization', 'Debugging'],
  },
  {
    title: 'Android',
    label: 'Creating mobile interfaces and app flows with native Android tools.',
    skills: ['Android Studio', 'Kotlin', 'XML', 'Android UI', 'Layouts', 'App Development'],
  },
  {
    title: 'Tools & Focus',
    label: 'Using practical workflows to build full-stack and mobile-ready projects with clean structure.',
    skills: ['Git & GitHub', 'Vite', 'VS Code', 'npm', 'Full-Stack Projects', 'Clean Code'],
  },
]

function SkillsSection() {
  return (
    <section className="skills-section" id="my-skills">
      <div className="skills-header">
        <p className="section-kicker">Skills</p>
        <h3>My skills, tools, and the craft behind the code.</h3>
        <p className="section-intro">
          I enjoy building modern web experiences with clean structure, sharp visuals, and
          interactions that feel smooth on every screen.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <p className="skill-card-kicker">{group.title}</p>
            <p className="skill-card-copy">{group.label}</p>
            <div className="skill-pill-wrap">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
