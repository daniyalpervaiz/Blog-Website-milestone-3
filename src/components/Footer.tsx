import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className='text-center flex justify-around bg-black text-white'>
                <div>

                    ©2024 DP. Allrights Reserved.
                </div>
                <div>
                    <ul className='flex space-x-4'>
                    <Link href="https://github.com/daniyalpervaiz">  <li className='text-[20px]'><FaGithub /></li></Link>
                      <Link href="https://www.linkedin.com/in/daniyal-pervaiz-2530741a1/">  <li className='text-[20px]'><FaLinkedin /></li></Link>
                      <Link href="">  <li className='text-[20px]'><FaFacebook /></li></Link>
                      <Link href="">  <li className='text-[20px]'><FaInstagramSquare /></li></Link>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer

