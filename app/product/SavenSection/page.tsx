'ues client';

import Image from "next/image";

const SavenSection = () => {
    return (
        <div className="">
            <div className="py-20 md:space-y-20 items-center justify-center flex flex-col bg-[#E5E4E2]">
                <div className="text-4xl md:w-2/5 text-center">Robust features to achieve any busines objective as your team scales</div>
                <div className='md:flex md:space-x-10 md:space-y-0 mx-[80px] '>
                    
                    <div>
                        <div className="flex flex-col w-96 space-y-4  ">
                            <Image src={'/image/icons/settings.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                            <div className="text-2xl font-semibold"> Drive cross-team efficiency  </div>
                            <div className="space-y-4 text-xl ml-6">
                                <div>.Connect teams and authmate work to improve productivity.</div>
                                <div>.Gain clarity on bottlenecks and allocate work Workload.</div>
                                <div>.Manage resourcing for teams with messing and unique views.</div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col w-96 space-y-4  ">
                            <Image src={'/image/image1/logo8.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                            <div className="text-2xl font-semibold">Automate processes </div>
                            <div className="space-y-4 text-xl ml-6">
                                <div>.Systemize with Workflow Builder and Forms</div>
                                <div>.Reduce manual work wiht custom Rules like assigning tasks and updating statuses.</div>
                                <div>.Automate work in one place with 200+ integrations.</div>
                            </div>
                        </div>

                    </div>
                    <div >
                        <div className="flex flex-col w-96 space-y-4 ">
                            <Image src={'/image/image1/logo9.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                            <div className="text-2xl font-semibold"> Get real-time insights  </div>
                            <div className="space-y-4 text-xl ml-6">
                                <div>.Monitor progress across teams,without manual work.</div>
                                <div>.Build peersonalized visualizations whit Custom Fields and Charts.</div>
                                <div>.Save time on creating reports with a robust Charts template library.</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:flex md:space-x-10 md:space-y-0 mx-[80px] '>
                    
                    <div>
                        <div className="flex flex-col w-96 space-y-4  ">
                            <Image src={'/image/image1/logo10.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                            <div className="text-2xl font-semibold">Protect sensitive data</div>
                            <div className="space-y-4 text-xl ml-6">
                                <div>.Connect teams and authmate work to improve productivity.</div>
                                <div>.Gain clarity on bottlenecks and allocate work Workload.</div>
                                <div>.Manage resourcing for teams with messing and unique views.</div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col w-96 space-y-4  ">
                            <Image src={'/image/image1/logo11.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                            <div className="text-2xl font-semibold"> Mange permissions and settings </div>
                            <div className="space-y-4 text-xl ml-6">
                                <div>.Control permissions,privacy settings,security requirements and mone from a centralized admin console.</div>
                                <div>.Reduce manual work with custom Rules like assingnin tasks and updatinig statuses.</div>
                                
                            </div>
                        </div>

                    </div>
                    <div >
                        <div className="flex flex-col w-96 space-y-4 ">
                            <Image src={'/image/image1/logo12.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                            <div className="text-2xl font-semibold">Set goals and drive alignment</div>
                            <div className="space-y-4 text-xl ml-6">
                                <div>.Align your organization and inspire ownership with Goals.</div>
                                <div>.Track all of your teams projects in a single view with Portfolios</div>
                                <div>.Save time on createing reports with a robust Charts Template library.</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SavenSection