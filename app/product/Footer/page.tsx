'use client';
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";





const Footer = () => {
    return (
        <section className='hidden md:block py-20  bg-gray-500'>
            <div className='flex justify-between px-20 text-white'>
                <div>@2024 Bird, Tnc. All rights</div>
                <div>
                    Terms & Conditons
                </div>
                <div className='flex gap-[5px]'>
                    <div className='bg-black p-2 rounded-full'>
                        <FaTwitter className='text-white' />
                    </div>
                    <div className='bg-black p-2 rounded-full'>
                        <FaLinkedin className='text-white' />
                    </div>
                    <div className='bg-black p-2 rounded-full'>
                        <FaInstagramSquare className='text-white' />
                    </div>
                    <div className='bg-black p-2 rounded-full'>
                        <FaFacebook className='text-white' />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Footer