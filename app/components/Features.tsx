"use client"
import React from 'react'
import { FiBriefcase, FiTrello, FiSend, FiGift, FiWifiOff, FiGlobe } from "react-icons/fi";


const Features = () => {
    return (
        <section className='container !mt-[150px] flex flex-col space-y-[100px] px-[30px]'>
            <section className='flex-center flex-col space-y-[20px]'>
                <p className='text-orange-clr text-center text-[16px] font-bold tracking-tight'>WORK BETTER</p>
                <h2 className='text-[36px] text-center font-bold text-primary'>For Your Business</h2>
                <p className='w-[430px] text-center text-gray-secondary text-[16px] leading-[32px]'>We did research what your company needs and here we are providing all of them just for you</p>
            </section>
            <section className='flex-center'>
                <section className='grid grid-cols-3 gap-20'>
                    <section className='w-[300px] flex space-x-[20px]'>
                        <div className='w-[64px] h-[64px] bg-blue-clr rounded-full flex-center'>
                            <FiBriefcase className='w-[24px] h-[24px] text-white'/>
                        </div>
                        <section className='flex-1 flex flex-col space-y-[20px]'>
                            <h3 className='text-primary text-[20px] font-semibold'>Share Insights</h3>
                            <p className='text-gray-secondary text-[16px] leading-[32px]'>Working together with your team to make decisions</p>
                        </section>
                    </section>
                    <section className='w-[300px] flex space-x-[20px]'>
                        <div className='w-[64px] h-[64px] bg-dark-blue-clr rounded-full flex-center'>
                            <FiTrello className='w-[24px] h-[24px] text-white'/>
                        </div>
                        <section className='flex-1 flex flex-col space-y-[20px]'>
                            <h3 className='text-primary text-[20px] font-semibold'>Kanban Mode</h3>
                            <p className='text-gray-secondary text-[16px] leading-[32px]'>
                                Organize the report that easy to be understand
                            </p>
                        </section>
                    </section>

                    <section className='w-[300px] flex space-x-[20px]'>
                        <div className='w-[64px] h-[64px] bg-red-clr rounded-full flex-center'>
                            <FiSend className='w-[24px] h-[24px] text-white'/>
                        </div>
                        <section className='flex-1 flex flex-col space-y-[20px]'>
                            <h3 className='text-primary text-[20px] font-semibold'>Track Leads</h3>
                            <p className='text-gray-secondary text-[16px] leading-[32px]'>
                                See where your money goes and comes in business
                            </p>
                        </section>
                    </section>
                    <section className='w-[300px] flex space-x-[20px]'>
                        <div className='w-[64px] h-[64px] bg-pink-clr rounded-full flex-center'>
                            <FiGift className='w-[24px] h-[24px] text-white'/>
                        </div>
                        <section className='flex-1 flex flex-col space-y-[20px]'>
                            <h3 className='text-primary text-[20px] font-semibold'>Reward System</h3>
                            <p className='text-gray-secondary text-[16px] leading-[32px]'>
                                Motivate your team working harder and receive a gift
                            </p>
                        </section>
                    </section>
                    <section className='w-[300px] flex space-x-[20px]'>
                        <div className='w-[64px] h-[64px] bg-primary rounded-full flex-center'>
                            <FiWifiOff className='w-[24px] h-[24px] text-white'/>
                        </div>
                        <section className='flex-1 flex flex-col space-y-[20px]'>
                            <h3 className='text-primary text-[20px] font-semibold'>Offline Mode</h3>
                            <p className='text-gray-secondary text-[16px] leading-[32px]'>
                                Use the feature while off from the internet? sure can
                            </p>
                        </section>
                    </section>
                    <section className='w-[300px] flex space-x-[20px]'>
                        <div className='w-[64px] h-[64px] bg-yellow-clr rounded-full flex-center'>
                            <FiGlobe className='w-[24px] h-[24px] text-white'/>
                        </div>
                        <section className='flex-1 flex flex-col space-y-[20px]'>
                            <h3 className='text-primary text-[20px] font-semibold'>189 Country</h3>
                            <p className='text-gray-secondary text-[16px] leading-[32px]'>
                                Working together worldwide people from anywhere
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Features