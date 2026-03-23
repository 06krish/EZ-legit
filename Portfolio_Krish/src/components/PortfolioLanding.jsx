const navItems = ['About', 'My Skills', 'Work', 'Blog', 'Contact']
const socials = ['in', 'gh', 'ig']

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
              <a key={item} href="/" onClick={(event) => event.preventDefault()}>
                {item}
              </a>
            ))}
          </div>

          <a className="scroll-indicator" href="#contact">
            <span>Scroll down</span>
            <span className="scroll-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </aside>

      <main className="hero-stage">
        <div className="code-tag code-top">&lt;html&gt;</div>
        <div className="code-tag code-top-secondary">&lt;body&gt;</div>

        <section className="hero-copy">
          <div className="code-tag code-title">&lt;h1&gt;</div>
          <p className="eyebrow">Hello, my name is</p>
          <h2>
            Hi,
            <br />
            I&apos;m <span className="accent-name" data-text="Krish">Krish</span>,
            <br />
            software developer
          </h2>
          <div className="code-tag code-paragraph">&lt;p&gt;</div>
          <p className="hero-subtitle">Front End Developer / React Enthusiast / UI Builder</p>
          <div className="code-tag code-paragraph code-close">&lt;/p&gt;</div>

          <a className="cta-button" id="contact" href="mailto:krish@example.com">
            Contact me!
          </a>
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
      </main>
    </div>
  )
}

export default PortfolioLanding
