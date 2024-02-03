'use client';
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const options = [
    {
        index: 0,
        title: 'Marketing',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Markting',
        image: '/image/logo/tabs1.webp',
    },
    {
        index: 1,
        title: 'Operations',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Operations',
        image: '/image/logo/tabs2.webp',
    },
    {
        index: 2,
        title: 'IT',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore IT',
        image: '/image/logo/tabs3.webp',
    },
    {
        index: 3,
        title: 'Product',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Product',
        image: '/image/logo/tabs4.webp',
    },
    {
        index: 4,
        title: 'Sales',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Sales',
        image: '/image/logo/tabs1.webp',
    }
]


const ThirdSection = () => {
    return (
        <div className="py-10 space-y-10 items-center justify-center flex flex-col">
            <div className="text-4xl text-center">Built to support any team and workflow</div>
            <div className="flex space-x-10 px-10 items-center justify-center">
                <div className="">
                    {
                        options.map((option, index) => (
                            <Accordion type="single" defaultValue="Marketing" key={index} >
                                <AccordionItem key={index} value={option.title}>
                                    <AccordionTrigger className="w-96 text-3xl">{option.title}</AccordionTrigger>
                                    <AccordionContent className="border-b border-blue-500">
                                        <div className="md:flex items-center space-x-20">
                                            <div className="px-10">
                                                <div className="text-lg mt-4">{option.descriptions}</div>
                                                <div className="flex text-blue-400 pt-4">
                                                    <div className="text-lg">{option.action}</div>
                                                    <ArrowRight className="h-6 w-6 ml-4"/>
                                                </div>
                                            </div>
                                            <div className="px-10">
                                                <Image src={option.image} alt="image" width={500} height={500}/>

                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ThirdSection;