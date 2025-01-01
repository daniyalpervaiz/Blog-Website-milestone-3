import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'

const Dynamic = async (props: any) => {
    const query = `*[_type=="blog" && slug.current=='${props.params.slug}'] {
  image, title,content,summary,
  author->{name,image,bio}
}[0]`

    const blog = await client.fetch(query)
  

    return (
        <div>
            <div className='w-[70%] mx-auto flex flex-col border-2 border-gray-400 bg-gray-200'>
                <h1 className='md:text-3xl text-[20px] text-center'>{blog.title}</h1> <br />
                <Image src={urlForImage(blog.image)} alt="pic" width={500} height={100} className='xl:ml-[80px] ml-[0px] w-[900px] md:h-[400px] h-[250px] ' /><br />
                <p className='md:text-xl text-[16px] px-2'>{blog.summary}</p><br />
                <div className='flex flex-col md:flex md:flex-row items-center'>
                    <Image src={urlForImage(blog.author.image)} alt='AuthorPic' width={50} height={50} className='w-[100px] h-[90px] md:w-[50px] md:h-[54px]' />
                    <div className='flex md:flex-row flex-col items-center  bg-gray-400'>
                    <section className='font-bold ml-2'>{blog.author.name}</section>
                    <section className='leading-4 ml-2'>{blog.author.bio}</section>
                    </div>
              
                
                </div>
                <section className="mt-10 px-2">
                        <PortableText  value={blog.content} />
                        
                    </section>
            </div>
        </div>

    )
}

export default Dynamic
