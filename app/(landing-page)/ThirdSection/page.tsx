'use client';
import { CheckCircle2} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


const ThirdSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });


  return (
    <div>
        <motion.div
        ref={ref}
        initial={{y:100,opacity:0}}
        animate = {{y:0,opacity:1}}
        transition={{duration:3}}
        className='flex flex-col space-y-10'
        >
            <div className="py-20 bg-[#097969] items-center flex flex-col space-y-18">
                <div className="text-white text-4xl px-10 md:px-0 md:text-6xl md:pb-10 flex items-center justify-start">
                   Why companies choose bird
                </div>
                <div className="md:w-3/4 px-10">
                    <div className="flex space-x-10 md:space-x-20 items-center text-2xl text-white justify-center border-b border-t py-10">
                        <CheckCircle2  className="md:h-20 md:w-20 h-10 w-10"/>
                        <div className="md:w-80 md:text-3xl text-md w-72">
                            The only platform that brings logether your content and conversations
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                            See rlated tasks, collaborators and progress to quickly achieve busicess goals.

                        </div>
                    </div>
                    <div className="flex space-x-10 md:space-x-20 items-center text-2xl text-white  justify-center border-b border-t py-10">
                        <CheckCircle2  className="md:h-20 md:w-20 h-10 w-10"/>
                        <div className="md:w-80 md:text-3xl text-md w-72">
                           Rated best for cross-team collaboration
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                         Asana is rated as a leader in work management by industry

                        </div>
                    </div>
                    <div className="flex space-x-10 md:space-x-20 items-center text-2xl text-white justify-center border-b border-t py-10">
                        <CheckCircle2  className="md:h-20 md:w-20 h-10 w-10"/>
                        <div className="md:w-80 md:text-3xl text-md w-72">
                            Simple adoption,wite less downtime
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                         Asana is rated as a leader in word management by industry
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    </div>
  )
}

export default ThirdSection;