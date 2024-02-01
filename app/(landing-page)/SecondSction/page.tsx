'use client';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import { useInView } from "framer-motion";

const tabs = [
    {
        name: 'Marketing',
        title: 'Meet campaign goals',
        feature1: 'Drive clarity to focus on shifting business needs',
        feature2: 'Maximize launch results',
        feature3: 'Automate and scale processes for approvals',
        image: '/image/logo/tabs1.webp',
    },
    {
        name: 'Operations',
        title: 'Drive operational efficiency',
        feature1: 'Track work and see progress in real time',
        feature2: 'Standardize and automate processes',
        feature3: 'Unblock teams to hit revenue goals',
        image: '/image/logo/tabs2.webp',
    },
    {
        name: 'IT',
        title: 'Automate and streamline IT requests',
        feature1: 'Onboard and offboard employees more efficiently',
        feature2: 'Get more control for critical security needs',
        feature3: 'Automate and scale processes for approvals',
        image: '/image/logo/tabs3.webp',
    },
    {
        name: 'Product',
        title: 'Launch better products faster',
        feature1: 'Keep product development on track',
        feature2: 'Centralize launch information',
        feature3: 'Tie your product roadmap to your strategy',
        image: '/image/logo/tabs4.webp',
    },
    {
        name: 'Company-wide',
        title: 'Create a single source of truth',
        feature1: 'Connect your work to company goals',
        feature2: 'Automate workflows across departments',
        feature3: 'Make better decisions faster with access to real-time data',
        image: '/image/logo/tabs1.webp',
    }
]


function SecondSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div
            ref={ref}
            className="flex flex-col justify-center items-center md:py-20 px-10">
            <div className="flex justify-center items-center">
                <div style={{
                    transform: `translateY${isInView ? 0 : 100}px`,
                    opacity: isInView ? 1 : 0,
                    transition: 'all 1s ease-in-out',
                }}
                    className="md:flex md:space-x-20 border-b md:py-10 py-10"
                >
                    <div className="space-y-10">
                        <div className="text-3xl">
                            80% of Fortune 100 companies choose Asana1
                        </div>
                        <div className="flex items-center space-x-9 hover:text-blue-500 text-lg ">
                            See how customers use bird
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="grid grid-cols-2 md:flex md:space-x-10 items-center justify-center py-10"
                    >
                        <Image src={'/image/logo/logo1.webp'} alt="image" width={150} height={150} />
                        <Image src={'/image/logo/logo2.webp'} alt="image" width={150} height={150} />
                        <Image src={'/image/logo/logo3.webp'} alt="image" width={150} height={150} />
                        <Image src={'/image/logo/logo4.webp'} alt="image" width={150} height={150} />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl hidden md:block pt-10  py-20"
            >
                See how Teams are Bird
            </motion.div>

            <div className="hidden md:flex items-center justify-center">
                {
                    tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`
                         flex
                         justify-center
                         space-x-10
                         w-60
                         ${activeTab == tab ? 'border-b-4 pt-2 border-gray-500 text-gray-800' : 'text-muted-foreground'}
                         `}

                            onClick={() => setActiveTab(tab)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="flex text-3xl text-center items-center h-20 w-20 justify-center">
                                <div>
                                    {tab.name}
                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>
            <div className="pt-10 hidden md:block">
                {activeTab && (
                    <div className="flex justify-center items-center">
                        <div
                            style={{ height: '525px', width: '700px' }}
                            className="flex-col bg-gray-200 p-10 rounded-md"
                        >
                            <p className="text-4xl py-10 border-b underline">{activeTab.title}</p>
                            <div className="space-y-10 text-center justify-center">
                                <ul className="flex space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                    <li>
                                        {activeTab.feature1}
                                    </li>
                                </ul>
                                <ul className="flex space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                    <li>
                                        {activeTab.feature2}
                                    </li>
                                </ul>
                                <ul className="flex space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                    <li>
                                        {activeTab.feature3}
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div
                            className="bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex"
                            style={{ height: '525px', width: '700px' }}>
                            <Image src={activeTab.image} width={530} height={530} className="rounded-md" alt="image" property="true" />

                        </div>
                    </div>


                )

                }

            </div>
        </div>





    )
}

export default SecondSection