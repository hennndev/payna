"use client"
import React from 'react'

const EmailSubscription = () => {
    return (
        <section className='container !mt-[150px] px-[30px] !mb-[100px]'>
            <section className='flexx space-x-[100px]'>
                <iframe
                    src='https://www.youtube.com/embed/9VlvbpXwLJs?si=kRLiN_DM8YHRHbuC'
                    title="YouTube video player"
                    className='w-[635px] h-[450px] rounded-[40px]'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <section className='flex flex-col space-y-[10px]'>
                    <p className='uppercase text-orange-clr text-[16px] font-bold'>save more time</p>
                    <h2 className='text-primary text-[36px] font-bold'>And Boost Productivity</h2>
                    <p className='w-[386px] text-gray-secondary text-[16px] leading-[32px]'>Your employees can bring any success into your business, so we need to take care of them</p>

                    <section className='flexx space-x-[5px] w-[422px] rounded-[50px] bg-gray-primary pl-6 !mt-[30px]'>
                        <input type="email" placeholder='Email Address' className='flex-1 bg-transparent border-none outline-none text-left'/>
                        <button className='bg-blue-clr rounded-[50px] text-white px-10 py-3'>Get Started</button>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default EmailSubscription