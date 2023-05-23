"use client"

import Image from "next/image"
import Link from "next/link"

const productMock = {
  name: 'Rubber Mulf',
  productNumber: '000-0000-TEC',
  image: '/rubber.png',
  description: 'Os cilindros hidráulicos são componentes essenciais para a eficiência de seus equipamentos. Com isso, é necessário contar com os melhores profissionais e práticas na recuperação de seus cilindros. A Ubertec Uberlândia oferece as melhores soluções em recuperação de cilindros hidráulicos, garantindo que todos os seus equipamentos funcionem corretamente. A recuperação de cilindros hidráulicos consiste na substituição das peças danificadas ou desgastadas com novas peças equivalentes. Nossa equipe realiza os serviços com agilidade e segurança, por isso escolha a Ubertec Uberlândia para obter resultados eficientes em sua recuperação de cilindros hidráulicos.',
  especifications: [
    {
      name: 'Altura',
      value: '150 mm'
    },
    {
      name: 'Largura',
      value: '100 mm'
    },
    {
      name: 'Profundidade',
      value: '110 mm'
    },
    {
      name: 'Itens incluídos',
      value: '1 peça Rubber Mulf, 3 peças de vedação, 1 manual de instalação'
    },
  ]

}

export const Product = () => {

  const product = productMock

  return (
    <div >
      <div className="container mx-auto mt-24 flex flex-col md:flex-row gap-10 px-4 md:px-0">
        <div className="flex justify-center">
          <Image src={product.image} width={400} height={400} alt="" style={{width:400, height:400}}/>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl text-red-600 font-black uppercase">{product.name}</h1>
              <span className="block text-sm text-gray-500">PN: <strong>{product.productNumber}</strong></span>
            </div>

            <div>
              <Link href={'#'} className='h-10 px-6 rounded-full flex items-center justify-center bg-red-500 text-white transition-all hover:bg-red-600 hover:scale-95' >
                <span>Solicitar orçamento</span>
              </Link>
            </div>
          </div>

          <div className="py-4 mt-4 border-t">
            <h2 className="text-red-600 font-bold uppercase">Descrição:</h2>
            <p className="text-gray-700 mt-2 leading-7">{product.description}</p>
          </div>

          <div className="pt-4 mt-4 border-t">
            <h2 className="text-red-600 font-bold uppercase">Especificações:</h2>
            <div className="mt-2 text-gray-700">
              {product.especifications.map( (espec) => (
                <div className="flex gap-2" key={espec.name}>
                  <span className="block font-bold">{espec.name}:</span>
                  <div>{espec.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t">
            <h2 className="text-red-600 font-bold uppercase">Suporte ao cliente:</h2>
            <div className="mt-4 flex gap-6">
              <Link href={'#'} className='px-6 py-2 text-center rounded-full flex items-center justify-center border border-gray-500 transition-all hover:border-red-500 hover:text-red-500 hover:scale-95' >
                Manual do equipamento
              </Link>

              <Link href={'#'} className='px-6 py-2 text-center rounded-full flex items-center justify-center border border-gray-500 transition-all hover:border-red-500 hover:text-red-500 hover:scale-95' >
                <span>Guia de instalação</span>
              </Link>

              <Link href={'#'} className='px-6 py-2 text-center rounded-full flex items-center justify-center border border-gray-500 transition-all hover:border-red-500 hover:text-red-500 hover:scale-95' >
                <span>Treinamento</span>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}