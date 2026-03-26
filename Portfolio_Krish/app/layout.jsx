import './globals.css'

import { ThemeProvider } from '../components/theme-provider'

export const metadata = {
  title: 'Krish Raj | Portfolio',
  description:
    'Portfolio of Krish Raj, a software developer focused on full-stack web apps, Android development, and polished user interfaces.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
