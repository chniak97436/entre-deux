import Image from 'next/image'
import Link from 'next/link'

export default function AlaUne() {
    return (
        <div className='w-screen h-auto text-center mb-6 bg-[#e5fafad8]/95 '>
            <h1 className='text-b text-2xl text center mb-6 md:mb-12'>A LA UNE</h1>
            <Link href="/">
                <Image className='w-[90%] mx-[5%]] h-60 object-cover '
                       src="/Appel-à-candidatures.jpg"
                       width={1000}
                       height={600}
                       alt='appel a candidature'/>
            </Link>
        </div>
    )
}
