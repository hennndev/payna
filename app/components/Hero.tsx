"use client"
import React from 'react'
import Image from 'next/image'
import { FiCheckCircle, FiActivity } from "react-icons/fi"
import heroImage from '@/app/assets/images/hero-image.png'
import heroChartIcon from '@/app/assets/images/hero-chart-icon.svg'

const Hero = () => {
    return (
        <section className='container px-[30px]'>
            <section className='flex-between'>
                <section className='flex flex-col w-[442px] space-y-[20px]'>
                    <h1 className='text-primary text-[55px] font-bold tracking-tighter'>
                        Manage Payroll Like an Expert
                    </h1>
                    <p className='text-[16px] leading-[32px] text-gray-secondary'>
                        Payna is helping you to setting up the payroll without required any finance skills or knowledge before
                    </p>
                    <button className='bg-blue-clr w-[180px] h-[48px] rounded-[50px] text-[16px] font-semibold text-white'>
                        Get Started
                    </button>
                </section>

                <section className='relative w-[540px] h-[400px]'>
                    <Image src={heroImage} fill alt='hero-image' className='w-full h-full rounded-[60px]'/>

                    <section className='absolute bottom-20 -left-20 shadow-md bg-white w-[215px] h-[155px] rounded-[16px] p-4 flex flex-col space-y-[5px]'>
                        <section className='flexx space-x-[10px]'>
                            <section className='bg-dark-blue-clr w-[40px] h-[40px] rounded-full flex-center'>
                                <FiActivity className='w-[20px] h-[20px] text-white'/>
                            </section>
                            <section className='flex flex-col space-y-[2px]'>
                                <p className='text-primary text-[16px] font-medium'>Analytics</p>
                                <p className='text-[14px] text-gray-secondary'>Real Time Report</p>
                            </section>
                        </section>
                        <div className='relative w-[181px] h-[63px]'>
                            <Image src={heroChartIcon} fill alt="hero-chart-icon" className='w-full h-full'/>
                        </div>
                    </section>

                    <section className='absolute top-10 -right-5 shadow-md bg-white w-[213px] h-[66px] rounded-[16px] p-4 flexx space-x-[10px]'>
                        <section className='bg-dark-blue-clr w-[40px] h-[40px] rounded-full flex-center'>
                            <FiCheckCircle className='w-[20px] h-[20px] text-white'/>
                        </section>
                        <section className='flex flex-col space-y-[2px]'>
                            <p className='text-primary text-[16px] font-medium'>Bulk Report</p>
                            <p className='text-[14px] text-gray-secondary'>Work faster 200%</p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Hero