import Image from 'next/image'
import React from 'react'

const SixSection = () => {
  return (
    <div className='py-20 md:space-y-20 items-center justify-center flex flex-col'>
        <div className='text-4xl text-center px-10'>80% of customers increase their </div>
        <div className='md:flex md:space-x-10 items-center px-10 justify-center '>
            <div className='border-b md:border-r md:border-b-0 md:w-80'>
                <Image src={'/image/logo/logo1.webp'} width={250} height={250} alt='logo' className='h-40'/>
            </div>
            <div className='border-b md:border-r md:border-b-0 md:w-80'>
                <Image src={'/image/logo/logo3.webp'} width={250} height={250} alt='logo' className='h-40'/>
            </div>
            <div className='border-b md:border-r md:border-b-0 md:w-80'>
                <Image src={'/image/logo/logo2.webp'} width={250} height={250} alt='logo' className='h-40'/>
            </div>
            <div className='border-b md:border-r md:border-b-0 md:w-80'>
                <Image src={'/image/logo/logo4.webp'} width={250} height={250} alt='logo' className='h-40'/>
            </div>
        </div>
    </div>
  )
}

export default SixSection