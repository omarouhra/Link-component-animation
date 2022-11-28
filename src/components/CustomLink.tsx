import Link from 'next/link';
import React from 'react'

type Props = {
    label: string;
    href:string
}

export default function customLink({label,href}: Props) {
  return (
    <Link href={href}>
        {/* link container */ }
        <div className='group h-[40px] p-2 overflow-hidden'>
        {/* labels container */}
          <div className=' flex flex-col items-center justify-center group-hover:-translate-y-10 transition duration-700'>
                  <span className=' text-2xl font-semibold'>{ label }</span>
                  <span className=' text-2xl font-semibold'>{ label }</span>
      </div>

        </div>

      </Link>
  )
}