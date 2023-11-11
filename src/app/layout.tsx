import Header from '@/app/header'
import './globals.css'
import { Jost } from 'next/font/google'
import Footer from './footer'

const jost = Jost({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['500','600','700'],
  display: "swap"
})

export const metadata = {
  title: 'Ruda',
  description: 'группа компаний индустриальных решений в области станкостроения. Станки. Станки Тольятти',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}