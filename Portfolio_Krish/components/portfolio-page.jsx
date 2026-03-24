'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/krishraj3406' },
  { name: 'GitHub', href: 'https://github.com/06krish' },
  { name: 'Instagram', href: 'https://www.instagram.com/_06krish_' },
]

const socialIcons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7.04 2.02 2.02 0 0 0 5.25 3Zm15.19 9.88c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.37 1.87V8.5H9.37c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.13-.93.27-.68.87-1.38 1.89-1.38 1.33 0 1.86 1.02 1.86 2.53V20H20v-6.91Z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.78.5 12.29c0 5.2 3.3 9.6 7.88 11.15.58.11.79-.26.79-.58 0-.29-.01-1.05-.02-2.06-3.2.72-3.88-1.58-3.88-1.58-.52-1.36-1.28-1.72-1.28-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.21 1.75 1.21 1.02 1.8 2.67 1.28 3.32.98.1-.76.4-1.28.72-1.57-2.56-.3-5.24-1.31-5.24-5.83 0-1.29.45-2.35 1.18-3.18-.12-.3-.51-1.5.11-3.13 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 5.8 0c2.2-1.54 3.17-1.22 3.17-1.22.63 1.63.24 2.83.12 3.13.73.83 1.17 1.89 1.17 3.18 0 4.53-2.68 5.52-5.24 5.82.41.37.78 1.1.78 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.2.69.8.58A11.83 11.83 0 0 0 23.5 12.3C23.5 5.78 18.35.5 12 .5Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm0 1.75A3.5 3.5 0 0 0 3.75 7.25v9.5a3.5 3.5 0 0 0 3.5 3.5h9.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5h-9.5Zm10 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z" />
    </svg>
  ),
}

const skillIcons = {
  React: 'R',
  'Next.js': 'N',
  'Tailwind CSS': 'T',
  JavaScript: 'JS',
  'Responsive UI': 'UI',
  'Node.js': 'ND',
  'Express.js': 'EX',
  MongoDB: 'DB',
  'REST APIs': 'API',
  'Backend Logic': 'BE',
  'Android Studio': 'AS',
  Kotlin: 'KT',
  XML: 'XML',
  'Data Structures': 'DS',
  Algorithms: 'AL',
}

const skillGroups = [
  {
    title: 'Frontend',
    copy: 'Modern React interfaces, responsive layouts, and polished component structure.',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
  },
  {
    title: 'Backend',
    copy: 'API design, database integration, and full-stack flows that stay maintainable.',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Backend Logic'],
  },
  {
    title: 'Mobile + Core',
    copy: 'Strong problem solving with Android experience and practical CS fundamentals.',
    items: ['Android Studio', 'Kotlin', 'XML', 'Data Structures', 'Algorithms'],
  },
]

const projects = [
  {
    title: 'Full Stack Portfolio Experience',
    tag: 'Featured',
    copy:
      'A cinematic personal site that combines motion, bold layouts, and clear storytelling for web and mobile.',
    stack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'Backend API System',
    tag: 'Server',
    copy:
      'A backend-focused build with structured routes, data models, and scalable service logic.',
    stack: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Android App Concept',
    tag: 'Mobile',
    copy:
      'A native app flow designed for smooth usability, practical features, and clean mobile UI.',
    stack: ['Kotlin', 'XML', 'Android Studio'],
  },
]

const contactMethods = [
  {
    label: 'Email',
    value: 'krishraj3406@gmail.com',
    href: 'mailto:krishraj3406@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/krishraj3406',
    href: 'https://www.linkedin.com/in/krishraj3406',
  },
  {
    label: 'WhatsApp',
    value: '+91 9801197200',
    href: 'https://wa.me/919801197200',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.01,
    boxShadow: '0 24px 60px rgba(2, 6, 23, 0.34)',
  },
  transition: { duration: 0.22, ease: 'easeOut' },
}

const buttonHover = {
  whileHover: {
    y: -3,
    scale: 1.03,
    boxShadow: '0 14px 30px rgba(45, 212, 191, 0.18)',
  },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.18, ease: 'easeOut' },
}

const typedHeroLines = [
  'I design and build modern',
  'digital experiences with precision.',
]

const backgroundParticles = [
  { id: 'p1', x: 12, y: 18, size: 1.2, color: 'rgba(255,105,180,0.75)' },
  { id: 'p2', x: 24, y: 34, size: 1.6, color: 'rgba(255,255,255,0.7)' },
  { id: 'p3', x: 38, y: 14, size: 1.1, color: 'rgba(94,234,212,0.7)' },
  { id: 'p4', x: 54, y: 28, size: 1.5, color: 'rgba(255,105,180,0.78)' },
  { id: 'p5', x: 68, y: 18, size: 1.25, color: 'rgba(94,234,212,0.72)' },
  { id: 'p6', x: 84, y: 26, size: 1.35, color: 'rgba(255,255,255,0.64)' },
  { id: 'p7', x: 18, y: 62, size: 1.4, color: 'rgba(94,234,212,0.7)' },
  { id: 'p8', x: 34, y: 76, size: 1.15, color: 'rgba(255,105,180,0.74)' },
  { id: 'p9', x: 52, y: 58, size: 1.7, color: 'rgba(255,255,255,0.7)' },
  { id: 'p10', x: 70, y: 72, size: 1.3, color: 'rgba(255,105,180,0.72)' },
  { id: 'p11', x: 86, y: 60, size: 1.45, color: 'rgba(94,234,212,0.72)' },
]

const particleLinks = [
  ['p1', 'p2'],
  ['p2', 'p3'],
  ['p3', 'p4'],
  ['p4', 'p5'],
  ['p5', 'p6'],
  ['p2', 'p7'],
  ['p7', 'p8'],
  ['p8', 'p9'],
  ['p9', 'p10'],
  ['p10', 'p11'],
  ['p4', 'p9'],
  ['p5', 'p9'],
  ['p6', 'p11'],
]

const particleMap = Object.fromEntries(backgroundParticles.map((particle) => [particle.id, particle]))

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-75">
      <motion.div
        className="absolute left-[12%] top-[12%] h-40 w-40 bg-teal-300/8 blur-3xl"
        animate={{ opacity: [0.2, 0.45, 0.22], x: [0, 18, -8, 0], y: [0, -12, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[14%] top-[34%] h-56 w-56 bg-pink-500/12 blur-3xl"
        animate={{ opacity: [0.18, 0.42, 0.2], x: [0, -22, 8, 0], y: [0, 14, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        animate={{ opacity: [0.5, 0.72, 0.56] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="particleLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(45,212,191,0.16)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.09)" />
            <stop offset="100%" stopColor="rgba(244,114,182,0.22)" />
          </linearGradient>
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
            <stop offset="58%" stopColor="rgba(244,114,182,0.68)" />
            <stop offset="100%" stopColor="rgba(244,114,182,0)" />
          </radialGradient>
        </defs>

        {particleLinks.map(([from, to], index) => {
          const start = particleMap[from]
          const end = particleMap[to]

          return (
            <g key={`${from}-${to}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="url(#particleLine)"
                strokeWidth="0.16"
              />
              <motion.circle
                r="0.26"
                fill={index % 2 === 0 ? 'rgba(45,212,191,0.78)' : 'rgba(244,114,182,0.82)'}
                animate={{
                  cx: [start.x, end.x],
                  cy: [start.y, end.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3.6 + (index % 4) * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.22,
                }}
              />
            </g>
          )
        })}

        {backgroundParticles.map((particle, index) => (
          <motion.g
            key={particle.id}
            animate={{ opacity: [0.45, 1, 0.55], scale: [1, 1.16, 1] }}
            transition={{
              duration: 3.2 + (index % 5) * 0.45,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.15,
            }}
            style={{ transformOrigin: `${particle.x}px ${particle.y}px` }}
          >
            <circle
              cx={particle.x}
              cy={particle.y}
              r={particle.size}
              fill="url(#particleGlow)"
            />
            <circle cx={particle.x} cy={particle.y} r={particle.size * 0.34} fill={particle.color} />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  )
}

function OrbitArtwork() {
  return (
    <div className="relative isolate -translate-y-12 flex min-h-[38rem] w-full items-center justify-center overflow-visible lg:-translate-y-20 lg:min-h-[46rem]">
      <div className="pointer-events-none absolute inset-[4%] rounded-[3rem] bg-[radial-gradient(circle_at_50%_44%,rgba(236,72,153,0.16),transparent_14%),radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.05),transparent_22%),radial-gradient(circle_at_85%_88%,rgba(244,114,182,0.1),transparent_24%),linear-gradient(180deg,rgba(10,10,10,0.96),rgba(20,14,18,0.9))] blur-xl" />

      <motion.div
        aria-hidden="true"
        className="absolute h-64 w-64 rounded-full bg-pink-500/16 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.svg
        viewBox="0 0 800 700"
        role="presentation"
        className="relative z-10 h-full w-full max-w-[39rem] drop-shadow-[0_0_34px_rgba(236,72,153,0.25)] lg:max-w-[46rem]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="ribbonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#831843" />
            <stop offset="45%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff1f7" />
            <stop offset="30%" stopColor="#fbcfe8" />
            <stop offset="64%" stopColor="#ec4899" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g opacity="0.22" fill="none" stroke="rgba(236,72,153,0.22)">
          <ellipse cx="392" cy="304" rx="168" ry="132" />
          <ellipse cx="476" cy="474" rx="178" ry="96" />
        </g>

        <motion.g
          fill="none"
          stroke="url(#ribbonGlow)"
          strokeWidth="4.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {[
            'M238 212C296 216 366 218 444 217C554 216 635 228 664 270C684 298 664 330 617 337C554 346 432 342 326 337C220 332 148 346 118 394C93 435 108 481 154 505C204 531 274 510 313 443C354 373 370 292 407 228',
            'M226 204C284 208 357 211 438 210C555 209 640 224 672 267C696 300 675 338 624 346C560 356 436 351 327 346C220 340 144 354 112 404C85 446 102 495 150 520C202 548 278 526 319 455C360 385 377 302 414 236',
            'M214 197C275 201 348 203 432 203C556 202 646 221 680 266C707 303 684 346 632 356C567 368 441 361 329 354C221 347 141 363 106 414C76 459 96 509 146 536C201 567 281 543 324 466C367 396 384 311 421 244',
          ].map((path, index) => (
            <motion.path
              key={path}
              d={path}
              strokeOpacity={0.95 - index * 0.12}
              initial={{ pathLength: 0.12, opacity: 0.54 }}
              animate={{ pathLength: [0.12, 1, 0.12], opacity: [0.54, 1, 0.54] }}
              transition={{
                duration: 5.4 + index * 0.25,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.16,
              }}
            />
          ))}
        </motion.g>

        <motion.g
          fill="none"
          stroke="rgba(236,72,153,0.88)"
          strokeWidth="3.6"
          strokeLinecap="round"
          animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {[
            'M215 518C282 514 356 511 435 512C534 514 614 531 662 570C706 607 710 650 676 666C630 688 558 669 474 645C387 620 299 601 218 602',
            'M227 508C296 503 372 501 451 503C551 505 631 524 680 566C726 605 730 652 693 671C646 695 569 676 482 651C394 626 304 609 226 611',
            'M240 499C309 493 386 491 467 494C566 497 647 518 698 563C747 606 750 656 711 676C661 701 581 682 491 658C400 632 312 617 238 620',
          ].map((path, index) => (
            <motion.path
              key={path}
              d={path}
              strokeOpacity={0.9 - index * 0.14}
              initial={{ pathLength: 0.14, opacity: 0.42 }}
              animate={{ pathLength: [0.14, 1, 0.14], opacity: [0.42, 0.88, 0.42] }}
              transition={{
                duration: 4.6 + index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.28 + index * 0.14,
              }}
            />
          ))}
        </motion.g>

        <motion.circle
          cx="430"
          cy="338"
          r="30"
          fill="url(#orbGlow)"
          animate={{ scale: [1, 1.22, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="430"
          cy="338"
          r="10"
          fill="#ffe4f0"
          animate={{ opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  )
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-teal-300">
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl [font-family:var(--font-display)]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p>
    </div>
  )
}

export default function PortfolioPage() {
  const fullTypedText = typedHeroLines.join('\n')
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const isComplete = typedText === fullTypedText
    const isEmpty = typedText.length === 0
    const delay = isDeleting ? 35 : 65
    const pause = isComplete ? 1600 : isEmpty && isDeleting ? 350 : delay

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedText(fullTypedText.slice(0, typedText.length + 1))
        return
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && !isEmpty) {
        setTypedText(fullTypedText.slice(0, typedText.length - 1))
        return
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false)
      }
    }, pause)

    return () => window.clearTimeout(timer)
  }, [fullTypedText, isDeleting, typedText])

  const renderedHeroLines = typedText.split('\n')

  return (
    <main className="relative isolate overflow-hidden">
      <GridBackground />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl"
          animate={{
            x: [0, 70, 10, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.12, 0.96, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[-8rem] top-10 h-[28rem] w-[28rem] rounded-full bg-pink-500/15 blur-3xl"
          animate={{
            x: [0, -80, -20, 0],
            y: [0, 50, 10, 0],
            scale: [1, 1.08, 1.16, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-rose-500/10 blur-3xl"
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.94, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.08),transparent_20%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.14),transparent_24%),linear-gradient(120deg,rgba(0,0,0,0.36),rgba(10,20,18,0.1),rgba(32,8,18,0.2))]"
          animate={{
            opacity: [0.78, 1, 0.86, 0.78],
            backgroundPosition: ['0% 0%', '8% 12%', '-6% 4%', '0% 0%'],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,140,160,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(120,140,160,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.95),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.05),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(244,114,182,0.08),transparent_22%),radial-gradient(circle_at_50%_58%,rgba(255,255,255,0.02),transparent_28%)]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-pink-500/15 bg-black/72 shadow-[0_10px_40px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <motion.a href="#top" className="flex items-center gap-3" {...buttonHover}>
            <motion.div
              className="relative flex h-12 w-12 items-center justify-center [perspective:900px]"
              animate={{ rotateY: [0, 14, 0, -14, 0], rotateX: [0, -8, 0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="absolute inset-0 rounded-2xl bg-teal-300/35 blur-md" />
              <span className="absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-2xl bg-pink-500/45" />
              <span className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-teal-300 to-rose-400 shadow-[0_12px_28px_rgba(255,45,122,0.24)]" />
              <span className="relative text-lg font-black text-slate-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]">
                K
              </span>
            </motion.div>
            <div>
              <p className="text-sm font-bold text-white">Krish Raj</p>
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-slate-200">
                Software Developer
              </p>
            </div>
          </motion.a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="rounded-full border border-transparent px-3 py-2 text-sm font-semibold tracking-[0.08em] text-slate-200 transition hover:border-pink-500/25 hover:bg-pink-500/10 hover:text-pink-100"
                whileHover={{ y: -2, color: '#ffffff' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)] lg:px-10 lg:pb-24 lg:pt-36"
      >
        <motion.div {...fadeUp} className="relative z-10">
          <motion.div
            className="mb-6 inline-flex rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.32em] text-teal-200 sm:text-[0.82rem]"
            animate={{
              y: [0, -4, 0],
              boxShadow: [
                '0 0 0 rgba(45,212,191,0)',
                '0 0 24px rgba(45,212,191,0.18)',
                '0 0 0 rgba(45,212,191,0)',
              ],
              borderColor: [
                'rgba(94,234,212,0.2)',
                'rgba(94,234,212,0.45)',
                'rgba(94,234,212,0.2)',
              ],
            }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            Hello, my name is Krish Raj
          </motion.div>
          <motion.div
            className="mt-1 inline-flex items-center rounded-full border border-pink-400/25 bg-gradient-to-r from-pink-500/14 via-white/6 to-fuchsia-500/14 px-4 py-2 shadow-[0_0_0_rgba(255,45,122,0)]"
            animate={{
              y: [0, -2, 0],
              boxShadow: [
                '0 0 0 rgba(255,45,122,0)',
                '0 0 26px rgba(255,45,122,0.2)',
                '0 0 0 rgba(255,45,122,0)',
              ],
              borderColor: [
                'rgba(244,114,182,0.25)',
                'rgba(244,114,182,0.55)',
                'rgba(244,114,182,0.25)',
              ],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.75)]" />
            <p className="text-[0.92rem] font-black uppercase tracking-[0.3em] text-white drop-shadow-[0_0_16px_rgba(255,105,180,0.45)] sm:text-[1rem]">
              Software Developer
            </p>
          </motion.div>
          <h1 className="mt-4 max-w-3xl text-[1.7rem] leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.1rem] lg:text-[2.5rem] [font-family:var(--font-hero)]">
            {renderedHeroLines[0] ?? ''}
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-white to-rose-300 bg-clip-text text-transparent">
              {renderedHeroLines[1] ?? ''}
            </span>
            <span className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-1 bg-teal-300 align-baseline animate-pulse" />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build modern web experiences with React and Next.js, backend systems with
            Node.js and MongoDB, and user interfaces that feel clean, polished, and
            reliable across devices.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="/Krish-Raj-Resume.pdf"
              download
              className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-lg border border-pink-400/25 bg-pink-500/10 px-6 py-3 text-sm font-semibold text-pink-100 transition"
              {...buttonHover}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/8 to-transparent opacity-100 transition duration-300 group-hover:opacity-0" />
              <span className="relative z-10 inline-flex items-center gap-3 transition duration-300 group-hover:text-white">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-pink-200/12 transition duration-300 group-hover:bg-white/16"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M11.25 3.75h1.5v8.19l2.97-2.97 1.06 1.06-4.78 4.78-4.78-4.78 1.06-1.06 2.97 2.97V3.75Zm-6 12.5h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1 0-1.5Z" />
                  </svg>
                </span>
                <span>Download Resume</span>
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-300/40 hover:bg-white/10"
              {...buttonHover}
            >
              Contact me
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {socials.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-rose-300/40 hover:bg-white/10"
                {...buttonHover}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-pink-200">{socialIcons[item.name]}</span>
                  <span>{item.name}</span>
                </span>
              </motion.a>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <motion.div
              className="rounded-[1.5rem] border border-teal-300/18 bg-teal-300/8 p-5 shadow-[inset_0_1px_0_rgba(45,212,191,0.08)]"
              {...cardHover}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-teal-200">Focus</p>
              <p className="mt-2 text-sm font-semibold text-teal-50">Full-stack web development</p>
            </motion.div>
            <motion.div
              className="rounded-[1.5rem] border border-teal-300/18 bg-teal-300/8 p-5 shadow-[inset_0_1px_0_rgba(45,212,191,0.08)]"
              {...cardHover}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-teal-200">Working With</p>
              <p className="mt-2 text-sm font-semibold text-teal-50">React, Next.js, Node.js, MongoDB</p>
            </motion.div>
            <motion.div
              className="rounded-[1.5rem] border border-teal-300/18 bg-teal-300/8 p-5 shadow-[inset_0_1px_0_rgba(45,212,191,0.08)]"
              {...cardHover}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-teal-200">Also Interested In</p>
              <p className="mt-2 text-sm font-semibold text-teal-50">Android development and problem solving</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative z-20 w-full lg:self-start lg:justify-self-end"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-rose-500/10 via-transparent to-teal-300/10 blur-3xl" />
          <OrbitArtwork />
        </motion.div>
      </section>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-20 sm:px-8 lg:px-10">
        <motion.section {...fadeUp} id="about" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <SectionTitle
            eyebrow="About"
            title="I build software that looks polished, works reliably, and feels intentional."
            copy="My work blends frontend design, backend logic, and mobile development. I enjoy turning practical ideas into products with clean architecture, strong usability, and visuals that do not feel generic."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              'Full-stack development with modern React architecture.',
              'Backend systems with API design and database integration.',
              'Android development backed by strong CS fundamentals.',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-950/50 p-5 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="skills" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <SectionTitle
            eyebrow="Skills"
            title="The tools I use to shape modern web and mobile products."
            copy="I like working across the stack, but I care especially about how the final experience feels: fast, clean, expressive, and maintainable."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                {...cardHover}
                className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/30"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-teal-300">
                  {group.title}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">{group.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"
                    >
                      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-pink-500/15 px-1.5 text-[0.62rem] font-bold uppercase text-pink-200">
                        {skillIcons[item] ?? '•'}
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="work" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <SectionTitle
            eyebrow="Work"
            title="Projects that reflect my range across UI, backend, and mobile."
            copy="A few focused examples of the kind of work I enjoy: product-style interfaces, server-side systems, and practical builds that solve real problems."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                {...cardHover}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-300">
                  {project.tag}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white [font-family:var(--font-display)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{project.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="contact" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s connect and turn your idea into something real."
            copy="If you have a project idea, freelance requirement, internship opportunity, or just want to collaborate, I&apos;m open to building something thoughtful together."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {contactMethods.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="block rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 transition hover:border-teal-300/30 hover:bg-slate-950/80"
                  {...cardHover}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="rounded-[1.75rem] border border-teal-300/20 bg-gradient-to-br from-teal-300/10 to-rose-400/10 p-6"
              {...cardHover}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Best Fit</p>
              <p className="mt-4 text-2xl font-bold text-white [font-family:var(--font-display)]">
                Full-stack web builds, polished portfolio UI, responsive frontend work, and backend integration.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-200">
                Share your idea, expected stack, and timeline. I can help shape the UI,
                structure the codebase, and build a cleaner product experience.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
