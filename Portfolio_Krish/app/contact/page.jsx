import Link from 'next/link'
import { ThemeToggle } from '../../components/ThemeToggle'

export const metadata = {
  title: 'Contact | Krish Raj',
  description: 'Send a project idea, query, or collaboration request to Krish Raj.',
}

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
]

const contactDetails = [
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

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-10 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.18),transparent_24%),linear-gradient(180deg,rgba(248,250,252,0.86),rgba(240,253,250,0.82),rgba(253,242,248,0.9))] dark:bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.18),transparent_26%),linear-gradient(180deg,rgba(3,7,18,0.96),rgba(2,6,23,0.96),rgba(15,23,42,0.98))]" />

      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2.5rem)] max-w-5xl rounded-[2rem] border border-slate-200/60 bg-white/60 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/40 sm:top-6 sm:w-[calc(100%-4rem)]">
        <div className="flex items-center justify-between px-4 py-1.5 sm:px-6 sm:py-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[0.6rem] bg-slate-900 shadow-sm dark:bg-white">
              <span className="text-sm font-black tracking-tight text-white dark:text-slate-900">KR</span>
            </div>
            <span className="text-[1.05rem] font-bold tracking-tight text-slate-900 dark:text-white">Krish Raj</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-transparent px-3 py-2 text-sm font-semibold tracking-[0.08em] text-slate-700 transition hover:border-teal-300/40 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:border-pink-500/25 dark:hover:bg-pink-500/10 dark:hover:text-pink-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-24 sm:pt-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <span aria-hidden="true">{'<-'}</span>
            Back to portfolio
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-teal-700 dark:text-teal-300">
            Contact Form
          </p>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/65 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-teal-700 dark:text-teal-300">
              Start a conversation
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white [font-family:var(--font-display)] sm:text-5xl">
              Share your idea or query.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Fill in the form and your message will be forwarded to my email. Use it for project ideas, freelance work, internships, or collaboration requests.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="block rounded-[1.35rem] border border-slate-200/70 bg-white/60 px-5 py-4 transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
                >
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/72 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]">
            <form
              action="https://formsubmit.co/krishraj3406@gmail.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New portfolio contact request" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Topic
                </span>
                <select
                  name="topic"
                  required
                  className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                >
                  <option value="">Select one</option>
                  <option value="Idea">Idea</option>
                  <option value="Query">Query</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows="7"
                  placeholder="Tell me about your idea, requirement, or question..."
                  className="w-full rounded-[1.6rem] border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                />
              </label>

              <button
                type="submit"
                className="group relative inline-flex min-h-13 items-center justify-center overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-300/30 to-pink-400/0 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="relative z-10">Send to my email</span>
              </button>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                This form forwards your message to <strong className="font-semibold text-slate-700 dark:text-slate-200">krishraj3406@gmail.com</strong>.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
