'use client';
import { CalendarDays, CalendarMinus, Check } from "lucide-react";
import { useState } from "react";


const FirstSection = () => {
    const [isActivePlan, setIsActivePlan] = useState(true);

    const togglePlan = () => {
        setIsActivePlan(!isActivePlan);
    }
    return (
        <div className="flex flex-col space-y-10 pb-20 items-center justify-center">
            <div className="space-y-6 flex flex-col text-center pt-20 px-10 md:px-0">
                <div className="text-gray-800 text-xl">PRICING</div>
                <div className="text-5xl">Fastly organinze your work, Start Free.</div>
                <div className="text-xl text-gray-500">Access Birds Features.No credit card required</div>
            </div>

            <div className="flex px-10 md:px-0">
                <button
                    className={`${isActivePlan ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} p-4 rounded-l-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsActivePlan(true)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarDays size={24} />
                        <div className="text-2xl">Monthly</div>
                    </div>

                </button>
                <button
                    className={`${!isActivePlan ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} p-4 rounded-r-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsActivePlan(false)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarMinus size={24} />
                        <div className="text-2xl">Yearly</div>
                    </div>

                </button>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
                    <div className="border-gray-500 p-10 rounded-lg border space-y-8 ">
                        <div className="text-2xl">Basic</div>
                        <div className="text-lg">For Teams that need to crete project plans with confidence</div>
                        <div className="text-5xl font-semibold">US$0</div>
                        <div className="text-md">Per User,per month billed annually $144</div>
                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>
                        <div className="text-md">Manage Tasks and personal To-Dos:</div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2Factor Authentication </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">24/7 Customer Support</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Company</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Teams </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Owner</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Customs domain</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex p-10 md:space-x-10 md:space-y-0 items-center justify-center md:w-3/4  md:mx-auto">
                    <div className="border-purple-500 p-10 rounded-lg border space-y-8">
                        <div className="text-2xl">Premuin</div>
                        <div className="text-lg">For Teams that need to crete project plans with confidence</div>
                        {isActivePlan ? (
                           <div className="text-5xl font-semibol">US$12.99</div>
                        ):(
                            <div className="text-5xl font-semibol">US$99.99</div>
                        )}
                        <div className="text-md">Per User,per month billed annually</div>
                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>
                        <div className="text-md">Manage Tasks and personal To-Dos:</div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2Factor Authentication </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">24/7 Customer Support</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Company</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Teams </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Owner</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Customs domain</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex p-10 md:space-x-10 md:space-y-0 items-center justify-center md:w-3/4  md:mx-auto">
                    <div className="border-blue-500 p-10 rounded-lg border space-y-8">
                        <div className="text-2xl">Business</div>
                        <div className="text-lg">For Teams that need to crete project plans with confidence</div>
                        {isActivePlan ? (
                           <div className="text-5xl font-semibol">US$49.99</div>
                        ):(
                            <div className="text-5xl font-semibol">US$599.99</div>
                        )}
                        <div className="text-md">Per User,per month billed annually</div>
                        <div className="text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                                Contact Sales
                            </button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>
                        <div className="text-md">Manage Tasks and personal To-Dos:</div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2Factor Authentication </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">24/7 Customer Support</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Company</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Teams </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Owner</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Customs domain</div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default FirstSection