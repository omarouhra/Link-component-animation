import CustomLink from '@/components/CustomLink'
import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <CustomLink href='/' label='Home' /> 
    </div>
  )
}

export default Home
