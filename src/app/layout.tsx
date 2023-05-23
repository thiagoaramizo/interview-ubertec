import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catálogo Digital - Ubertec',
  description: 'Aplicação de exemplo para catálogo digital para Ubertec criada por Thiago Aramizo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
