'use client';

import Image from "next/image";


const EightSection = () => {
    return (
        <div>
            <section className="flex flex-col py-20 justify-center bg-black">
                <div className="text-center flex-col items-center justify-center pb-20">
                    <Image src={'/image/image1/logo1.svg'} alt="image" width={100} height={100} className="w-20 h-20 mx-auto mb-[15px]" />
                    <div className="text-6xl flex justify-center text-white md:px-20 pb-20  ">
                        Try the #1 sofware in project and product management
                    </div>
                    <div className="text-xl flex items-center justify-center">
                        <div className="p-6 w-40 rounded-lg bg-white"> Get started</div>
                    </div>
                </div>
                <div className="border-t mt-5 mx-20  hidden md:block ">
                    <div className="mt-20 md:flex justify-center hidden gap-[100px]">
                        <div >
                            <Image src={'/image/image1/logo1.svg'} width={50} height={50} alt="image" />
                        </div>
                        <div className=" flex flex-col  gap-[30px] mt-">
                            <div className="text-xl text-gray-200 bt-10">Bird</div>
                            <div className="mt-[5px] flex flex-col gap-[10px]">
                                <div className="text-gray-200">Home</div>
                                <div className="text-gray-200">Product</div>
                                <div className="text-gray-200">What's New</div>
                                <div className="text-gray-200">Pricing</div>
                                <div className="text-gray-200">Premium</div>
                            </div>
                        </div>
                        <div className=" flex flex-col  gap-[30px]">
                            <div className="text-xl text-gray-200 bt-10">About Us</div>
                            <div className="mt-[5px] flex flex-col gap-[10px]">
                                <div className="text-gray-200">Company </div>
                                <div className="text-gray-200">Leadership</div>
                                <div className="text-gray-200">Customers</div>
                                <div className="text-gray-200">Diverity</div>
                            </div>
                        </div>
                        <div className=" flex flex-col  gap-[30px]">
                            <div className="text-xl text-gray-200 bt-10">Workflow Solutions</div>
                            <div className="mt-[5px] flex flex-col gap-[10px]">
                                <div className="text-gray-200">Project Management</div>
                                <div className="text-gray-200">Goal Management</div>
                                <div className="text-gray-200">Increase Productvity</div>
                                <div className="text-gray-200">Work Management</div>
                                <div className="text-gray-200">Project Planning</div>
                                <div className="text-gray-200">To Do Lists</div>

                            </div>
                        </div>
                        <div className=" flex flex-col  gap-[30px]">
                            <div className="text-xl text-gray-200 bt-10">Resources</div>
                            <div className="mt-[5px] flex flex-col gap-[10px]">
                                <div className="text-gray-200">Help Center</div>
                                <div className="text-gray-200">Farum</div>
                                <div className="text-gray-200">Suppor</div>
                                <div className="text-gray-200">App Directory</div>
                                <div className="text-gray-200">Developers & API</div>

                                
                            </div>
                        </div>
                        <div className=" flex flex-col  gap-[30px]">
                            <div className="text-xl text-gray-200 bt-10">Learn</div>
                            <div className="mt-[5px] flex flex-col gap-[10px]">
                                <div className="text-gray-200">LI Leadership Styles</div>
                                <div className="text-gray-200">What are OkRS?</div>
                                <div className="text-gray-200">SMART GOALS</div>
                            </div>
                        </div>
                       
                       
                    </div>
                </div>

            </section>

        </div>


    )
}

export default EightSection;