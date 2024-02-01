'use client';

import Image from "next/image";
import { useState,useEffect } from "react";
import { ArrowRight,CheckCircle2 } from "lucide-react";
import { motion,useAnimation } from "framer-motion";

const FourSection = () => {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center px-20">
        <div className="py-20">
            <div className="space-y-6 flex flex-col">
                <div className="text-gray-800 text-xl px-10">
                    DRIVE EFFICIENCY ADROSS TEAME
                </div>
                <div className="text-4xl  px-10">Mange Complex work Easily</div>
                <div className="text-xl text-gray-600 px-10">
                    Connect what needs to get done.who is responsive and how to get it done.
                </div>
                <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
                    <Image  src={'/image/logo/image1.webp'} width={700} height={700} alt="image"/>
                    <div className="space-y-10 border-b">
                        <div className="text-3xl">Timeline</div>
                        <div className="w-96 text-xl text-gray-600">
                        Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.
                        </div>
                        <div className="flex">
                            <div className="text-lg"> Get Started </div>
                            <ArrowRight className="w-6 h-6 ml-4" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="space-y-6 flex flex-col">
                <div className="text-gray-800 text-xl px-10">
                    DRIVE EFFICIENCY ADROSS TEAME
                </div>
                <div className="text-4xl px-10">Mange Complex work Fastly </div>
                <div className="text-xl text-gray-600 px-10">
                    Connect what needs to get done.who is responsive and how to get it done.
                </div>
                <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
                    <Image  src={'/image/logo/image2.webp'} width={700} height={700} alt="image"/>
                    <div className="space-y-10 border-b">
                        <div className="text-3xl">Timeline</div>
                        <div className="w-96 text-xl text-gray-600">
                        Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.
                        </div>
                        <div className="flex">
                            <div className="text-lg"> Get Started </div>
                            <ArrowRight className="w-6 h-6 ml-4" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="space-y-6 flex flex-col">
                <div className="text-gray-800 text-xl px-10">
                    DRIVE EFFICIENCY ADROSS TEAME
                </div>
                <div className="text-4xl px-10">Mange Complex work Fastly </div>
                <div className="text-xl text-gray-600 px-10">
                    Connect what needs to get done.who is responsive and how to get it done.
                </div>
                <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
                    <Image  src={'/image/home1.webp'} width={700} height={700} alt="image"/>
                    <div className="space-y-10 border-b">
                        <div className="text-3xl">Timeline</div>
                        <div className="w-96 text-xl text-gray-600">
                        Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.
                        </div>
                        <div className="flex">
                            <div className="text-lg"> Get Started </div>
                            <ArrowRight className="w-6 h-6 ml-4" />
                        </div>
                    </div>

                </div>

            </div>
          
        </div>
    </div>
  )
}

export default FourSection




