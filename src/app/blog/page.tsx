import BlogCards from '@/components/BlogCards';
import { client } from '@/sanity/lib/client';
import React from 'react'
    
const Blog = async () => {
      const query = `*[_type=="blog"]            {
    
      image,title,summary,
      "slug":slug.current
    }`;
    const blog: Blog[] = await client.fetch(query)
  console.log(blog)
  return (
    <div>
         <h1 className="text-3xl text-center mt-1"><span className=" font-bold ">Travel And Tour Blogs</span></h1>
         <section >
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ml-20 space-y-5">

          {blog.map((blog: Blog) => {
            return (
              <BlogCards blog={blog} key={blog.slug} />)
          })}

        </div>
      </section>
      
    </div>
  )
}

export default Blog
