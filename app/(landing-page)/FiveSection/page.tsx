'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const FiveSection = () => {
  return (
    <div className="md:flex md:space-x-20 py-20 items-center justify-center bg-black">
      <div className="space-y-6 flex-col text-gray-200 md:w-1/3 px-10">
        <div className="text-xl">STREMLTRE YOUR WORK AND PROCESSES</div>
        <div className="text-xl">Prioritize reverue-driving work</div>
        <div className="text-xl">Connect what needs to get done, who is responsible, and how to get it done.</div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="text-blue-400"
            >
              Automate your workflows
            </AccordionTrigger>
            <AccordionContent className="border-b border-blue-500">
              Put tasks an autopitot like assingeing work,setting dee dates, and mone
              <div className="flex text-blue-400 pt-4">
                <div className="text-lg"> Get Starte</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              className="text-rose-400"
            >
              Automate your workflows
            </AccordionTrigger>
            <AccordionContent className="border-b border-rose-500">
              Put tasks an autopitot like assingeing work,setting dee dates, and mone
              <div className="flex text-blue-400 pt-4">
                <div className="text-lg"> Get Starte</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger
              className="text-blue-400"
            >
              Automate your workflows
            </AccordionTrigger>
            <AccordionContent className="text-blue-400">
              Put tasks an autopitot like assingeing work,setting dee dates, and mone
              <div className="flex text-blue-400 pt-4">
                <div className="text-lg"> Get Starte</div>
                <ArrowRight className="w-6 h-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>

   

       <Image src={'/image/home.webp'} alt="image" width={500} height={500} property="true"
       />



    </div>
  )
}

export default FiveSection;