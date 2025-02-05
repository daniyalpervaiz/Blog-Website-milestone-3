import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';

const Connect = () => {
    return (
        <div>
            <div className='flex justify-center mt-5 '>
                <div className='md:w-[50%] w-full h-[400px] lg:mb-72 mb-[190px] bg-gray-300 rounded-xl'>

                    <h1 className='text-center underline text-[22px]'>Contact US</h1>

                    <form className='flex  justify-center'>
                        <div className='flex flex-col'>
                            <label >Name:</label>
                            <input type="text" className='rounded-xl h-[30px] md:w-[350px] w-[250px]' />
                            <label >Email:</label>
                            <input type="email" className='rounded-xl h-[30px] md:w-[350px] w-[250px]' />
                            <label >Message:</label>
                            <textarea className='rounded-xl h-[80px] md:w-[350px] w-[250px]'></textarea>
                            <div className='flex justify-around mt-5'>
                                <button className='w-[150px] bg-black text-white  text-center rounded-xl'>Submit</button>
                                <button className='w-[150px] bg-black text-white  text-center rounded-xl'>Clear</button>
                            </div>
                        </div>
                    </form>
                    <h1 className='text-center underline text-[22px] mt-8'>Connect US</h1>
                    <ul className='flex justify-center space-x-3 mt-2'>
                      <Link href="https://github.com/daniyalpervaiz">  <li className='text-[20px]'><FaGithub /></li></Link>
                      <Link href="https://www.linkedin.com/in/daniyal-pervaiz-2530741a1/">  <li className='text-[20px]'><FaLinkedin /></li></Link>
                      <Link href="">  <li className='text-[20px]'><FaFacebook /></li></Link>
                      <Link href="">  <li className='text-[20px]'><FaInstagramSquare /></li></Link>
                        </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Connect
