"use client"
import { EnvelopeSimple, Phone } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="container mx-auto py-4 px-4 md:px-0 flex items-center justify-between">
      <div className='flex items-center text-sm flex-col md:flex-row md:gap-2'>
        <Image src="/logo-ubertec.png" alt="Ubertec" width={180} height={80} />
        <span className='text-gray-500 font-light md:pl-2 md:border-l md:mt-4 '>Soluções para Mineração</span>
      </div>
      

      <div className='flex-1 hidden lg:flex gap-16 items-center justify-end'>

        { /* Phone */ }
        <div className='flex items-center gap-3 text-gray-500'>
          <div className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-500' >
            <Phone size={24} />
          </div>
          <div className='flex flex-col'>
            <strong className='text-sm'>Telefone</strong>
            <span>(34) 3211-3799</span>
          </div>
        </div>

        { /* Email */ }
        <div className='flex items-center gap-3 text-gray-500'>
          <div className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-500' >
            <EnvelopeSimple size={24} />
          </div>
          <div className='flex flex-col'>
            <strong className='text-sm'>E-mail</strong>
            <span>comercial@ubertec.ind.br</span>
          </div>
        </div>

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

    </header>
  )
}