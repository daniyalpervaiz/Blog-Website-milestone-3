import React from 'react'
import Image from 'next/image'

function About() {
    return (
        <div>
            <div><h1 className="w-[100%] text-center text-[30px] font-extrabold underline">About</h1></div>
            <div className='w-[80%] mx-auto md:mb-[400px] mb-[100px] flex flex-col md:flex-row p-10 border-2 border-gray-400 bg-gray-200 rounded-xl md:gap-10 xl:gap-0'>
                <div className=' w-full  '><Image src="/pic.jpg" width={200} height={100} alt="Image" className='rounded-full w-[200px] h-[200px] md:mt-10 lg:mt-0 md:h-[150px] md:w-[250px] lg:w-[200px] lg:h-[180px] ml-5 md:ml-0 xl:ml-20' /></div>
                <div className=' mt-10'>

                    <h2 className="text-3xl text-gray-900">I am Daniyal Pervaiz</h2>
                    <p> I am Student of Governer Initiative Program, Learning Generative AI(Artificial Intelligence), I can create functional, user-friendly websites and web applications,i am proficient at coding with languages like HTML, CSS, JavaScript for front-end development,</p>

                </div>
            </div>
        </div>
    )
}

export default About
