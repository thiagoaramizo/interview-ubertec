"use client"

import Link from "next/link"

const links = [
  'Empresa',
  'Clientes',
  'Projetos',
  'Serviços',
  'Peças',
  'Treinamento',
  'Catálogo',
  'Contato',
]

export const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white uppercase text-sm font-semibold">
      <div className="container mx-auto py-6">
        <ul className="flex items-center gap-8 justify-between">
          {links.map( (link) => (
            <li key={link} className="block transition-all hover:scale-95">
              <Link href={'#'}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}