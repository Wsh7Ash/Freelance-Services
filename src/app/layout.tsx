import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freelance Services - Custom Development & Technical Writing',
  description: 'Professional custom development and technical writing services. Specializing in business websites, database systems, API documentation, and technical guides.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-900 text-white">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Freelance Services</div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="hover:text-gray-300">Services</a>
                <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white mt-16">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <p>&copy; {new Date().getFullYear()} Freelance Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 