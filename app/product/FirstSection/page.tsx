import Image from 'next/image';
import React from 'react'

const FirstSection = () => {
    return (
        <div className='md:flex md:space-x-20 py-20 space-y-10 items-center justify-center'>
            <div className='space-y-10 flex-col flex md:w-1/3 px-10'>
                <div className='text-6xl'>
                    The #1 Sofware in Product and Project Management
                </div>
                <div className='text-2xl'>
                    Bird connects Company-wide goals to the work needed to achieve them--across teams and functions
                </div>
                <div className='flex space-x-4'>
                    <div className='bg-black p-4  text-white text-xl rounded-md'>Get Started</div>
                    <div className='border p-4 text-xl rounded-md'> View Done</div>
                </div>
            </div>
            <Image src={'/image/logo/tabs5.webp'} width={700} height={700} alt='image' property='true' className='px-10'/>
        </div>
    )
}

export default FirstSection;