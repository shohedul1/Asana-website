'use client';

import React, { useState, useEffect } from 'react'
import Logo from './_components/logo'
import { NavigationMenuBar } from './_components/menu'
import AccotionButtons from './_components/buttons'

function Navbar() {

    const [hasScrolled, setHasScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false);

            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const navbarClass = `flex items-center justify-center space-x-18 bg-[#E5E4E2] md:px-10 sticky top-0 z-10 py-5
    ${hasScrolled ? 'shadow-xl shadow-white/50' : ''}  `

    return (
        <div className={navbarClass}>
            <div className='flex w-2/3 md:w-1/2 items-center'>
                <Logo />
                <NavigationMenuBar />
            </div>
            <AccotionButtons />

        </div>
    )
}

export default Navbar