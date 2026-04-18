import Image from 'next/image'
import Link from 'next/link'

export default function AlaUne() {
    return (
        <div className=' mx-0 h-auto text-center mb-6'>
            <h2 className="text-3xl font-bold mb-10 text-b">À la une</h2>
            <Link href="/">
                <Image className='w-full mx-auto h-70 object-fill rounded-lg shadow-lg'
                       src="/Appel-à-candidatures.jpg"
                       width={1100}
                       height={60}
                       alt='appel a candidature'/>
            </Link>
        </div>
    )
}
