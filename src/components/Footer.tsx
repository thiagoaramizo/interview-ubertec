"use client"
import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, Phone, YoutubeLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  'Empresa',
  'Nossos Clientes',
  'Projetos',
  'Serviços',
  'Peças',
  'Contato',
]

export const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-24 py-6 px-4 md:px-0">
      <div className='container mx-auto pt-4 flex gap-8 items-center justify-between'>
        <Image src="/logo-ubertec.png" alt="Ubertec" width={180} height={80} />
        { /* Language */ }
          <div className='flex items-center gap-3 text-gray-500'>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <span>PT</span>
            </Link>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <span>EN</span>
            </Link>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <span>ES</span>
            </Link>

          </div>
      </div>

      { /* Colunas */ }
      <div className='container text-sm mx-auto py-4 hidden lg:flex gap-8 items-start justify-between'>
        
        { /* Sobre */ }
        <div className='flex flex-col gap-2 w-1/3'>
          
          <div className='text-gray-700'>
            <strong className='block font-bold text-red-500 pb-2'>Sobre nós</strong>
            <span>
              A Ubertec é uma indústria em Uberlândia que possui um parque moderno e atualizado de máquinas e equipamentos, corpo técnico especializado e infraestrutura completa para dar apoio à atividade fim da empresa.
            </span>
          </div>

          <div className='flex gap-3 my-4'>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center text-gray-500 justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <YoutubeLogo size={24} />
            </Link>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center text-gray-500 justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <InstagramLogo size={24} />
            </Link>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center text-gray-500 justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <FacebookLogo size={24} />
            </Link>
            <Link href={'#'} className='w-10 h-10 rounded-full flex items-center text-gray-500 justify-center border border-gray-500 transition-all hover:text-red-500 hover:border-red-500 hover:scale-95' >
              <LinkedinLogo size={24} />
            </Link>
          </div>

        </div>

        { /* Menu */ }
        <div className='w-1/4 pl-24'>
          <strong className='block font-bold text-red-500 pb-2'>Menu</strong>
          <ul className="flex flex-col items-start gap-1 justify-between">
            {links.map( (link) => (
              <li key={link} className="block text-gray-700 transition-all hover:text-red-500">
                <Link href={'#'}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        { /* Horário */ }
        <div className='w-1/4'>
          <strong className='block font-bold text-red-500 pb-2'>Horário de funcionamento</strong>
          <ul className="flex flex-col items-start gap-1 justify-between">
            <li className="block text-gray-700 transition-all">
              <strong>Setor Admininstrativo</strong>
              <span className='block'>Segunda - Sexta: 7:30h até 17:18h</span>
              <span className='block'>Sábado: Fechado</span>
              <span className='block'>Domingo: Fechado</span>
            </li>
          </ul>
        </div>

        { /* Endereço */ }
        <div className='w-1/4'>
          <strong className='block font-bold text-red-500 pb-2'>Endereço</strong>
          <ul className="flex flex-col items-start gap-1 justify-between">
            <li className="block text-gray-700 transition-all hover:text-red-500">
              <strong className='block'>Matriz</strong>
              Av. Amazonas, 1303, CEP.: 38400-734 - Bairro Brasil, Uberlândia - MG
            </li>
            <li className="block text-gray-700 transition-all hover:text-red-500">
              <strong className='block'>Filial</strong>
              Rua T Quadras, Lote 18, S/N, CEP.: 56308-429 - Bairro Distrito Industrial, Petrolina - PE
            </li>
          </ul>
        </div>
        
      </div>

      <div className='container mx-auto mt-24 lg:mt-4 py-4 border-t border-gray-300 text-gray-400 flex justify-center text-sm'>
        <span>2023 © Ubertec - Todos os direitos reservados</span>
      </div>
    </footer>
  )
}