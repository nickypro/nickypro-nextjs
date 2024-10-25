import type { Metadata } from 'next'
import Nav from '@/components/nav'
import '@/assets/scss/main.scss'

export const metadata: Metadata = {
  title: 'Nicky.pro',
  description: "Nicky Pochinkov's Personal Website/Blog - built with Next.js",
  authors: [{ name: 'Nicky Pochinkov' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}