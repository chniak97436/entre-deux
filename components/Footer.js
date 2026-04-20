import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full relative p-4 bg-b flex flex-3'>
      <div className='relative flex flex-1/3'>
        <Image src="/footer-logo.png"
               alt="Commune de L'Entre-Deux"
               width={20}
               height={20}
               className=' border-2 border-[#8bfdfd] hover:shadow-emerald-300/50'
               loading='eager' 
               priority={true} />
      </div>
    </div>
  )
}
