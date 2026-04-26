import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full relative p-4 bg-b flex flex-1/3 flex-col md:flex-row justify-between items-center gap-4'>
      <div className='flex flex-col w-1/3 justify-center items-center md:items-start text-center text-sm text-v'>
        <Image src="/footer-logo.png"
          alt="Commune de L'Entre-Deux"
          width={50}
          height={40}
          className=' border-2 border-[#8bfdfd] hover:shadow-emerald-300/50'
          loading='eager'
          priority={true}
        />
      </div>
      <div className='flex flex-col w-1/3 justify-center items-center text-center text-sm text-v'>
        <p className='font-bold'>Commune de L'Entre-Deux</p>
        <p>2 Rue Fortune Hoarau, 97414 Entre-Deux</p>
        <p>Tél : 02 62 24 80 00</p>
        <p>Fax : 02 62 24 80 01</p>
        
      </div>
      <div className='flex flex-col w-1/3 justify-center items-center text-center text-sm text-v'>
        <p className='font-bold'>Horaires d'ouverture</p>
        <p>Lundi au Vendredi : 8h00 - 12h00 / 13h30 - 16h30</p>
        <p>Samedi : 8h00 - 12h00</p>
        <p>Dimanche : Fermé</p>
      </div>
    </div>
  )
}
