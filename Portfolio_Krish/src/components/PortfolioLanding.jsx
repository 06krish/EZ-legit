import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import WorkSection from './WorkSection'

const navItems = ['About', 'My Skills', 'Work', 'Blog', 'Contact']
const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7.04 2.02 2.02 0 0 0 5.25 3Zm15.19 9.88c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.37 1.87V8.5H9.37c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.93.27-.68.87-1.38 1.89-1.38 1.33 0 1.86 1.02 1.86 2.53V20H20v-6.91Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.78.5 12.29c0 5.2 3.3 9.6 7.88 11.15.58.11.79-.26.79-.58 0-.29-.01-1.05-.02-2.06-3.2.72-3.88-1.58-3.88-1.58-.52-1.36-1.28-1.72-1.28-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.21 1.75 1.21 1.02 1.8 2.67 1.28 3.32.98.1-.76.4-1.28.72-1.57-2.56-.3-5.24-1.31-5.24-5.83 0-1.29.45-2.35 1.18-3.18-.12-.3-.51-1.5.11-3.13 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 5.8 0c2.2-1.54 3.17-1.22 3.17-1.22.63 1.63.24 2.83.12 3.13.73.83 1.17 1.89 1.17 3.18 0 4.53-2.68 5.52-5.24 5.82.41.37.78 1.1.78 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.2.69.8.58A11.83 11.83 0 0 0 23.5 12.3C23.5 5.78 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm0 1.75A3.5 3.5 0 0 0 3.75 7.25v9.5a3.5 3.5 0 0 0 3.5 3.5h9.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5h-9.5Zm10 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z" />
      </svg>
    ),
  },
]

function PortfolioLanding() {
  return (
    <div className="portfolio-shell">
      <aside className="sidebar">
        <div className="brand-panel">
          <div className="brand-mark" aria-hidden="true">
            <span className="brand-shadow">K</span>
            <span className="brand-front">K</span>
          </div>
          <h1>Krish</h1>
          <p>Software Developer</p>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="socials" aria-label="Social links">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                onClick={(event) => event.preventDefault()}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <a className="scroll-indicator" href="#about">
            <span>Scroll down</span>
            <span className="scroll-arrow" aria-hidden="true">
              {'\u2193'}
            </span>
          </a>
        </div>
      </aside>

      <main className="page-content">
        <section className="hero-stage">
          <div className="code-tag code-top">&lt;html&gt;</div>
          <div className="code-tag code-top-secondary">&lt;body&gt;</div>

          <section className="hero-copy">
            <div className="code-tag code-title">&lt;h1&gt;</div>
            <p className="eyebrow">
              <span className="eyebrow-highlight">Hello, my name is Krish Raj</span>
            </p>

            <h2>
              Hi,
              <br />
              I&apos;m <span className="accent-name" data-text="Krish">Krish</span>,
              <br />
              software developer
            </h2>

            <div className="code-tag code-paragraph">&lt;p&gt;</div>
            <p className="hero-subtitle">
              Full Stack Developer / Mobile App Development / Data Structures / MongoDB
            </p>
            <div className="code-tag code-paragraph code-close">&lt;/p&gt;</div>

            <div className="hero-actions">
              <a className="cta-button" id="contact" href="mailto:krish@example.com">
                Contact me!
              </a>
              <a className="cta-button cta-button-secondary" href="/Krish-Raj-Resume.pdf" download>
                <span className="download-icon" aria-hidden="true">
                  {'\u2193'}
                </span>
                <span>Download Resume</span>
              </a>
            </div>
          </section>

          <section className="hero-art" aria-hidden="true">
            <svg viewBox="0 0 800 700" className="neon-orbit" role="presentation">
              <defs>
                <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff0f6a" />
                  <stop offset="45%" stopColor="#ff2f86" />
                  <stop offset="100%" stopColor="#ff5c9f" />
                </linearGradient>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fff5fb" />
                  <stop offset="28%" stopColor="#ff6ca9" />
                  <stop offset="62%" stopColor="#ff1f71" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ff1f71" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g className="orbit-backdrop">
                <ellipse cx="462" cy="348" rx="188" ry="144" />
                <ellipse cx="535" cy="528" rx="156" ry="92" />
              </g>

              <g className="orbit-cluster orbit-cluster-a">
                <path d="M190 180C280 230 425 215 585 232C705 245 722 312 552 308C391 305 271 262 197 394C142 493 272 560 329 456C392 341 406 184 514 174C633 164 721 217 726 258" />
                <path d="M204 174C291 220 433 214 590 238C694 252 710 311 550 309C392 306 281 265 208 388C154 479 274 545 331 454C394 354 403 198 511 187C620 175 706 221 712 261" />
                <path d="M217 170C303 212 437 213 591 243C687 262 699 312 548 311C396 309 293 269 219 382C167 464 279 528 333 451C394 365 401 210 509 198C607 187 693 226 700 267" />
                <path d="M228 166C314 206 439 213 591 249C678 270 688 315 545 314C402 312 305 272 231 377C181 449 286 510 335 448C394 376 400 223 507 210C596 199 681 232 689 273" />
                <path d="M244 164C325 200 444 214 592 254C668 277 678 317 543 318C408 316 318 276 245 374C197 437 291 495 337 445C392 386 400 237 506 222C587 211 669 238 679 280" />
              </g>

              <g className="orbit-cluster orbit-cluster-b">
                <path d="M288 512C362 509 440 538 550 581C647 619 712 650 716 611C722 551 630 503 533 494C444 485 367 502 322 533" />
                <path d="M301 503C374 503 450 534 557 575C649 611 708 641 710 606C714 550 626 505 530 497C444 490 372 505 330 533" />
                <path d="M313 494C385 498 460 529 562 569C650 603 703 633 703 601C705 549 621 507 527 501C443 495 377 509 338 533" />
              </g>

              <circle className="orbit-core" cx="494" cy="354" r="22" />
            </svg>
          </section>

          <div className="code-tag code-end">&lt;/h1&gt;</div>
          <div className="code-tag code-end-secondary">&lt;/body&gt;</div>
        </section>

        <AboutSection />
        <SkillsSection />
        <WorkSection />
      </main>
    </div>
  )
}

export default PortfolioLanding
