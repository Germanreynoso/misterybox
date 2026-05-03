import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Entrega Clasificada | Misiones Secretas en el Mundo Real',
  description: 'Una experiencia inmersiva de espías y misterio. Recibí sobres secretos, seguí pistas crípticas y descubrí una caja de misterio al final de tu misión.',
  keywords: ['experiencia inmersiva', 'misión secreta', 'caja misteriosa', 'regalo único', 'Argentina', 'espías', 'noir'],
}

export const viewport: Viewport = {
  themeColor: '#1A1A2E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
