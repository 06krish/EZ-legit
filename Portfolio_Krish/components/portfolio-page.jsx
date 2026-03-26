'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaDesktop, FaServer, FaCogs, FaCode, 
  FaNetworkWired, FaBrain, FaGitAlt, FaGithub, FaJava,
  FaLinkedin, FaEnvelope
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, 
  SiAndroidstudio, SiKotlin, SiFramer, 
  SiVercel, SiCplusplus, SiC
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { ThemeToggle } from './ThemeToggle'
import AntigravityBackground from './AntigravityBackground'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const iconClass = "h-3.5 w-3.5";
const skillIcons = {
  React: <FaReact className={iconClass} />,
  'Next.js': <SiNextdotjs className={iconClass} />,
  'Tailwind CSS': <SiTailwindcss className={iconClass} />,
  JavaScript: <SiJavascript className={iconClass} />,
  'Responsive UI': <FaDesktop className={iconClass} />,
  'Node.js': <FaNodeJs className={iconClass} />,
  'Express.js': <SiExpress className={iconClass} />,
  MongoDB: <SiMongodb className={iconClass} />,
  'REST APIs': <FaServer className={iconClass} />,
  'Backend Logic': <FaCogs className={iconClass} />,
  'Android Studio': <SiAndroidstudio className={iconClass} />,
  Kotlin: <SiKotlin className={iconClass} />,
  XML: <FaCode className={iconClass} />,
  'Data Structures': <FaNetworkWired className={iconClass} />,
  Algorithms: <FaBrain className={iconClass} />,
  Git: <FaGitAlt className={iconClass} />,
  GitHub: <FaGithub className={iconClass} />,
  'Framer Motion': <SiFramer className={iconClass} />,
  'VS Code': <VscVscode className={iconClass} />,
  Vercel: <SiVercel className={iconClass} />,
  'C++': <SiCplusplus className={iconClass} />,
  Java: <FaJava className={iconClass} />,
  C: <SiC className={iconClass} />,
}

const skillGroups = [
  {
    title: 'Languages',
    items: ['C++', 'Java', 'JavaScript', 'C'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Backend Logic'],
  },
  {
    title: 'Mobile + Core',
    items: ['Android Studio', 'Kotlin', 'XML', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'GitHub', 'Framer Motion', 'VS Code', 'Vercel'],
  },
]

const aboutFocusAreas = ['Backend Systems', 'Distributed Design', 'Developer Experience']

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
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.4, ease: 'easeOut' },
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
      <h2 className="max-w-2xl text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl [font-family:var(--font-display)]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{copy}</p>
    </div>
  )
}

export default function PortfolioPage() {
  const fullTypedText = typedHeroLines.join('\n')
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseXPixel = useMotionValue(-1000)
  const mouseYPixel = useMotionValue(-1000)

  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return
    const { clientX, clientY } = e
    mouseXPixel.set(clientX)
    mouseYPixel.set(clientY)

    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth) * 2 - 1
    const y = (clientY / innerHeight) * 2 - 1
    mouseX.set(x)
    mouseY.set(y)
  }

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
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-[1.2rem] bg-slate-900 dark:bg-white shadow-2xl"
              initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              <span className="text-3xl font-black tracking-tighter text-white dark:text-slate-900">KR</span>
            </motion.div>
            <motion.div
              className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-teal-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut", delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main 
        className={`relative isolate overflow-hidden ${showSplash ? 'max-h-screen overflow-hidden' : ''}`} 
        onMouseMove={handleMouseMove}
      >
      <AntigravityBackground />

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
          className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.08),transparent_20%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.14),transparent_24%)]"
          animate={{
            opacity: [0.78, 1, 0.86, 0.78],
            backgroundPosition: ['0% 0%', '8% 12%', '-6% 4%', '0% 0%'],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[-1] transition-opacity duration-300">
        {/* Base faint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,140,160,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(120,140,160,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        {/* Glow-on-hover Grid */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.3)_1px,transparent_1px)] bg-[size:72px_72px]"
          style={{
            maskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseXPixel}px ${mouseYPixel}px, black, transparent)`,
            WebkitMaskImage: useMotionTemplate`radial-gradient(350px circle at ${mouseXPixel}px ${mouseYPixel}px, black, transparent)`,
          }}
        />

        {/* Ambient corner glows */}
        <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.05),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(244,114,182,0.08),transparent_22%),radial-gradient(circle_at_50%_58%,rgba(255,255,255,0.02),transparent_28%)]" />
      </div>

      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2.5rem)] max-w-5xl rounded-[2rem] border border-slate-200/60 bg-white/60 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/40 sm:top-6 sm:w-[calc(100%-4rem)]">
        <div className="flex items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2">
          <motion.a href="#top" className="flex items-center gap-3" {...buttonHover}>
            <div className="flex h-9 w-9 items-center justify-center rounded-[0.6rem] bg-slate-900 dark:bg-white shadow-sm">
              <span className="text-sm font-black tracking-tight text-white dark:text-slate-900">KR</span>
            </div>
            <span className="text-[1.05rem] font-bold tracking-tight text-slate-900 dark:text-white">Krish Raj</span>
          </motion.a>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-transparent px-3 py-2 text-sm font-semibold tracking-[0.08em] text-slate-700 dark:text-slate-200 transition hover:border-teal-300/40 hover:bg-slate-100 hover:text-slate-900 dark:hover:border-pink-500/25 dark:hover:bg-pink-500/10 dark:hover:text-pink-100"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,20rem)] lg:px-10 lg:pb-24 lg:pt-36"
      >
        <motion.div {...fadeUp} className="relative z-10 -mt-4 sm:-mt-6 lg:-mt-8">
          <motion.div
            className="mb-6 inline-flex rounded-full border border-teal-400/30 bg-teal-500/10 dark:border-teal-300/20 dark:bg-teal-300/10 px-4 py-2 text-[0.92rem] font-bold uppercase tracking-[0.32em] text-teal-800 dark:text-teal-200 sm:text-[1rem]"
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
            <p className="text-[0.92rem] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white drop-shadow-[0_0_16px_rgba(255,105,180,0.45)] sm:text-[1rem]">
              Software Developer
            </p>
          </motion.div>
          <h1 className="mt-4 max-w-3xl text-[1.7rem] leading-[1.12] tracking-[-0.02em] text-slate-900 dark:text-white sm:text-[2.1rem] lg:text-[2.5rem] [font-family:var(--font-hero)]">
            {renderedHeroLines[0] ?? ''}
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-white to-rose-300 bg-clip-text text-transparent">
              {renderedHeroLines[1] ?? ''}
            </span>
            <span className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-1 bg-teal-300 align-baseline animate-pulse" />
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I build modern web experiences with React and Next.js, backend systems with
            Node.js and MongoDB, and user interfaces that feel clean, polished, and
            reliable across devices.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="/Krish-Raj-Resume.pdf"
              download
              className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-lg border border-pink-400/25 bg-pink-500/10 px-6 py-3 text-sm font-semibold text-pink-100 transition"
              {...buttonHover}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/8 to-transparent opacity-100 transition duration-300 group-hover:opacity-0" />
              <span className="relative z-10 inline-flex items-center gap-3 transition duration-300 group-hover:text-slate-900 dark:text-white">
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
              className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-lg border border-teal-400/30 bg-teal-500/10 px-6 py-3 text-sm font-semibold text-teal-800 dark:text-teal-100 transition"
              {...buttonHover}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 dark:from-white/5 to-transparent opacity-100 transition duration-300 group-hover:opacity-0" />
              <span className="relative z-10 inline-flex items-center gap-3 transition duration-300 group-hover:text-white dark:group-hover:text-white">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-200/40 dark:bg-teal-200/10 transition duration-300 group-hover:bg-white/20"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Contact me</span>
              </span>
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <motion.a 
              href="https://github.com/06krish"
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors"
            >
              <FaGithub className="h-[1.35rem] w-[1.35rem]" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/krishraj3406"
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="h-[1.35rem] w-[1.35rem]" />
            </motion.a>
            <motion.a 
              href="mailto:krishraj3406@gmail.com"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-[#EA4335] transition-colors"
            >
              <FaEnvelope className="h-[1.25rem] w-[1.25rem]" />
            </motion.a>
          </div>

        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative z-20 mt-8 grid w-full gap-4 sm:grid-cols-3 lg:mt-0 lg:flex lg:flex-col lg:self-center lg:justify-self-end"
        >
          <motion.div
            className="rounded-[1.5rem] border border-teal-300/30 bg-teal-300/10 p-6 shadow-[inset_0_1px_4px_rgba(45,212,191,0.1)] backdrop-blur-sm dark:border-teal-300/18 dark:bg-teal-300/8"
            {...cardHover}
          >
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-200">Focus</p>
            <p className="mt-3 text-[0.9rem] font-semibold text-slate-800 dark:text-teal-50">Full-stack web development</p>
          </motion.div>
          <motion.div
            className="rounded-[1.5rem] border border-pink-400/25 bg-pink-500/5 p-6 shadow-[inset_0_1px_4px_rgba(244,114,182,0.1)] backdrop-blur-sm dark:bg-pink-500/10"
            {...cardHover}
          >
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-pink-600 dark:text-pink-300">Working With</p>
            <p className="mt-3 text-[0.9rem] font-semibold text-slate-800 dark:text-pink-50">React, Next.js, Node.js, MongoDB</p>
          </motion.div>
          <motion.div
            className="rounded-[1.5rem] border border-teal-300/30 bg-teal-300/10 p-6 shadow-[inset_0_1px_4px_rgba(45,212,191,0.1)] backdrop-blur-sm dark:border-teal-300/18 dark:bg-teal-300/8"
            {...cardHover}
          >
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-200">Also Interested In</p>
            <p className="mt-3 text-[0.9rem] font-semibold text-slate-800 dark:text-teal-50">Android development and problem solving</p>
          </motion.div>
        </motion.div>

      </section>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-5 pb-20 sm:px-8 lg:px-10">
        <motion.section
          {...fadeUp}
          id="about"
          className="relative z-10 pt-4 scroll-mt-28"
        >
          <div className="relative z-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl [font-family:var(--font-display)]">
                  About Me
                </h2>
                <div className="mt-5 h-px w-full max-w-4xl bg-gradient-to-r from-teal-300/60 via-pink-400/35 to-transparent" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">
                Philosophy
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {/* Main Intro Span 2 */}
              <motion.div
                {...cardHover}
                className="flex flex-col justify-between rounded-[2rem] border border-slate-200 dark:border-white/8 bg-white/20 dark:bg-black/10 p-8 shadow-[inset_0_1px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:col-span-2"
              >
                <div>
                  <p className="max-w-xl text-3xl font-bold leading-[1.3] text-slate-900 dark:text-white sm:text-4xl">
                    I build reliable software with clarity, performance, and purpose.
                  </p>
                  <p className="mt-6 max-w-2xl text-[1.1rem] leading-[1.8] text-slate-600 dark:text-slate-400">
                    I work across backend and full-stack projects with a strong focus on clean
                    code and user experience. My core belief is that correctness should always overrule cleverness, and reliability over shortcuts.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  {aboutFocusAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/[0.04] px-4 py-2.5 text-[0.8rem] font-semibold tracking-wide text-slate-700 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Profile Image Span 1 */}
              <motion.div
                {...cardHover}
                className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 lg:col-span-1 lg:min-h-full"
              >
                <Image
                  src="/profile.jpeg"
                  alt="Krish Raj"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-teal-300">
                      Krish Raj
                    </p>
                    <p className="mt-1.5 text-lg font-bold text-white">Software Developer</p>
                  </div>
                </div>
              </motion.div>

              {/* Education & Bio */}
              <motion.article
                {...cardHover}
                className="flex flex-col justify-center rounded-[2rem] border border-slate-200 dark:border-white/8 bg-white/20 dark:bg-black/10 p-8 shadow-[inset_0_1px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:col-span-3"
              >
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-500">Education</h3>
                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white [font-family:var(--font-display)]">Lovely Professional University</p>
                  </div>
                  <div className="h-px w-full bg-slate-200 dark:bg-white/10 md:h-20 md:w-px" />
                  <div className="flex-[2]">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Interests & Goals</h3>
                    <p className="mt-2 text-[1.05rem] leading-relaxed text-slate-600 dark:text-slate-300">
                      Currently deeply interested in <strong className="font-semibold text-slate-900 dark:text-white">problem solving</strong> and <strong className="font-semibold text-slate-900 dark:text-white">software engineering</strong>. I am always looking forward to new opportunities to grow and build impactful technical products.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          id="skills"
          className="relative z-10 pt-4 scroll-mt-28"
        >
          <div className="relative z-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">
                  Skills
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl [font-family:var(--font-display)]">
                  Capability Matrix
                </h2>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Selected Stack
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                {...cardHover}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 dark:border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl [font-family:var(--font-display)]">
                    {group.title}
                  </h3>
                  <span className="flex items-center justify-center rounded-full bg-slate-200/60 dark:bg-slate-950/60 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-slate-600 dark:text-slate-300">
                    {group.items.length} items
                  </span>
                </div>
                
                <div className="relative z-10 mt-6 flex flex-wrap gap-2 text-slate-800 dark:text-slate-100">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-slate-950/60 px-3 py-1.5 text-sm transition-colors hover:bg-slate-200 dark:hover:bg-slate-900/80"
                    >
                      <span className="text-[1.1em] shrink-0 text-amber-500 drop-shadow-sm dark:text-amber-300">
                        {skillIcons[item] ?? '•'}
                      </span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="work" className="relative z-10 pt-4 scroll-mt-28">
          <div className="flex flex-col gap-3 mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">
              Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl [font-family:var(--font-display)]">
              Projects
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                {...cardHover}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 dark:border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-300">
                  {project.tag}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white [font-family:var(--font-display)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{project.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-slate-950/60 px-3 py-2 text-sm text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="contact" className="relative z-10 pt-4 scroll-mt-28">
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
                  className="block rounded-[1.5rem] border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-slate-950/60 p-5 transition hover:border-teal-300/30 hover:bg-slate-200/80 dark:bg-slate-950/80"
                  {...cardHover}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="rounded-[1.75rem] border border-teal-300/20 bg-gradient-to-br from-teal-300/10 to-rose-400/10 p-6"
              {...cardHover}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Best Fit</p>
              <p className="mt-4 text-2xl font-bold text-slate-900 dark:text-white [font-family:var(--font-display)]">
                Full-stack web builds, polished portfolio UI, responsive frontend work, and backend integration.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-200">
                Share your idea, expected stack, and timeline. I can help shape the UI,
                structure the codebase, and build a cleaner product experience.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
    </>
  )
}
