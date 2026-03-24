const contactMethods = [
  {
    label: 'Email',
    value: 'krishraj3406@gmail.com',
    href: 'mailto:krishraj3406@gmail.com',
    note: 'Best for project discussions, internships, and collaborations.',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M3 5.75h18a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.75a1 1 0 0 1 1-1Zm0 1.9v.17l9 6.44 9-6.44v-.17H3Zm18 1.98-8.42 6.03a1 1 0 0 1-1.16 0L3 9.63v6.67h18V9.63Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/krishraj3406',
    href: 'https://www.linkedin.com/in/krishraj3406',
    note: 'A good place to connect professionally and follow my work.',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7.04 2.02 2.02 0 0 0 5.25 3Zm15.19 9.88c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.37 1.87V8.5H9.37c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.93.27-.68.87-1.38 1.89-1.38 1.33 0 1.86 1.02 1.86 2.53V20H20v-6.91Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+91 9801197200',
    href: 'https://wa.me/919801197200',
    note: 'Quickest option for a short message, project inquiry, or direct contact.',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M12.02 2C6.5 2 2.02 6.47 2.02 12c0 1.76.46 3.48 1.33 5L2 22l5.14-1.34A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.53 22 12S17.55 2 12.02 2Zm0 18.18a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.05.8.82-2.97-.2-.31a8.17 8.17 0 1 1 6.87 3.79Zm4.48-5.9c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.66.8-.8.96-.15.17-.3.19-.56.07-.25-.13-1.08-.4-2.05-1.27-.76-.68-1.27-1.53-1.42-1.79-.15-.25-.02-.38.11-.5.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.42h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.17.21-.57.21-1.06.15-1.17-.06-.11-.23-.17-.48-.3Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/06krish',
    href: 'https://github.com/06krish',
    note: 'Explore code, experiments, and project structure in more detail.',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.78.5 12.29c0 5.2 3.3 9.6 7.88 11.15.58.11.79-.26.79-.58 0-.29-.01-1.05-.02-2.06-3.2.72-3.88-1.58-3.88-1.58-.52-1.36-1.28-1.72-1.28-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.21 1.75 1.21 1.02 1.8 2.67 1.28 3.32.98.1-.76.4-1.28.72-1.57-2.56-.3-5.24-1.31-5.24-5.83 0-1.29.45-2.35 1.18-3.18-.12-.3-.51-1.5.11-3.13 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 5.8 0c2.2-1.54 3.17-1.22 3.17-1.22.63 1.63.24 2.83.12 3.13.73.83 1.17 1.89 1.17 3.18 0 4.53-2.68 5.52-5.24 5.82.41.37.78 1.1.78 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.2.69.8.58A11.83 11.83 0 0 0 23.5 12.3C23.5 5.78 18.35.5 12 .5Z" />
      </svg>
    ),
  },
]

const collaborationPoints = [
  'Full-stack web projects with modern frontend and backend workflows.',
  'Template design for portfolio pages, landing pages, and polished web layouts.',
  'Project work involving UI design, responsive interfaces, and visual structure.',
  'Backend-focused implementation with APIs, logic, and database integration.',
  'Android app ideas, UI implementation, and practical feature builds.',
  'Problem-solving, portfolio work, and developer collaboration opportunities.',
]

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <p className="section-kicker">Contact</p>
        <p className="section-intro contact-intro">
          If you have a project idea, internship opportunity, freelance requirement, or
          just want to connect, I&apos;m open to conversations that turn good ideas into
          real work.
        </p>
      </div>

      <div className="contact-layout">
        <article className="contact-card contact-card-primary">
          <p className="contact-card-kicker">Get in touch</p>
          <h4>Reach out through the channel that fits best.</h4>
          <div className="contact-method-list">
            {contactMethods.map((item) => (
              <a
                key={item.label}
                className="contact-method"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-method-head">
                  <span className="contact-method-icon">{item.icon}</span>
                  <span className="contact-method-label">{item.label}</span>
                </span>
                <span className="contact-method-value">{item.value}</span>
                <span className="contact-method-note">{item.note}</span>
              </a>
            ))}
          </div>
        </article>

        <article className="contact-card">
          <p className="contact-card-kicker">What I can help with</p>
          <h4>Work I&apos;m excited to talk about.</h4>
          <div className="contact-pill-list">
            {collaborationPoints.map((item) => (
              <span key={item} className="contact-pill">
                {item}
              </span>
            ))}
          </div>
          <p className="contact-note">
            Prefer a quick start? Send a short message with your idea, stack, and timeline.
          </p>
        </article>
      </div>
    </section>
  )
}

export default ContactSection
