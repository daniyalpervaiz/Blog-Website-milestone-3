import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

const BlogCards = ({ blog }: { blog: Blog }) => {
  return (
    <div >
      <div className='flex flex-col w-[80%] justify-center  bg-gray-200 rounded-2xl mb-2'>
        <Image src={urlForImage(blog.image)} alt="pic" width={400} height={100} />
        <h1 className='font-bold md:text-2xl text-[16px]'>{blog.title}</h1>
        <p className='text-[18px]'>{blog.summary}</p>
        <Link href={`Dynamic/${blog.slug}`}>
        <div className='text-xl text-center border-2 border-black rounded-2xl bg-red-700 text-white'>Read More</div></Link>
      </div>

    </div>
  )
}

export default BlogCards
