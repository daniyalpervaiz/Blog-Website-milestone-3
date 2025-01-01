import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <header className='flex w-full justify-around h-10 items-center bg-black text-white'>

        <div className=' w-[20%] flex justify-center'> <Image src="/dp-logo.jpg" width={60} height={50} alt="logo" className='rounded-xl w-[50px] h-[30px] md:w-[60px] md:h-[35px]' /></div>
        <ul className='flex justify-around w-[50%]  md:space-x-6 md:text-[20px] text-[10px] space-x-4'>
          <Link href="/"> <li>Home</li>
          </Link>
          <Link href="/blog"> <li>Blogs</li></Link>
          <Link href="/contact-connect-us"><li>Contact/ConnectUS</li></Link>
        </ul>
      </header>

    </div>
  )
}

export default Navbar
