'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


function FirstSction() {
  return (
    <section className="md:px-20 px-10 space-y-10 bg-[#E5E4E2]">
        <div className="container mx-auto text-center md:w-1/2 pt-[30px]">
            <div className="text-6xl flex justify-center pb-10">
                The Best Platform for Cross-functional work
            </div>
            <p className="text-lg md:text-1xl mb-10">
                Want more efficiency in your organizition?Bird is easy for all teams to use,so you can deliver quality work,faster.
            </p>
            
            <div className="flex gap-4 justify-center">
                <button className="bg-black text-white px-6 py-3 rounded-sm">
                    Get Started
                </button>
                <Link href="/contact">
                <button className="bg-gray-500 text-white px-6 py-3 rounded-sm">
                    See how it works
                </button>
                </Link>
            </div>
        </div>

        <div className="md:pt-10 items-center md:flex justify-center space-y-10  md:mx-auto md:space-x-10">
            <motion.div
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
           className="px-10 md:px-0"
            >
                <Image src={'/image/home.webp'} width={500} height={500} alt="image" property="true" />
            </motion.div>

            <motion.div
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
           className="px-10 md:px-0 "
            >
                <Image src={'/image/home1.webp'} width={500} height={500} alt="image" property="true" />
            </motion.div>

            <motion.div
            initial={{y:100,opacity:0}}
            animate={{y:0,opacity:1}}
           className="px-10 md:px-0"
            >
                <Image src={'/image/home2.webp'} width={500} height={500} alt="image" property="true" />
            </motion.div>

        </div>

    </section>
  )
}

export default FirstSction;