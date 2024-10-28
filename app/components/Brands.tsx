"use client"
import React from 'react'
import Image from 'next/image'
import appleIcon from '@/app/assets/images/apple.svg'
import adobeIcon from '@/app/assets/images/adobe.svg'
import slackIcon from '@/app/assets/images/slack.svg'
import spotifyIcon from '@/app/assets/images/spotify.svg'
import googleIcon from '@/app/assets/images/google.svg'


const Brands = () => {
    return (
        <section className='container px-[30px]'>
            <section className='flex-between'>
                <p className='text-primary text-[16px] font-semibold w-[151px]'>Trusted by Global Companies</p>

                <section className='flexx space-x-[50px]'>
                    <div className='relative w-[87.7px] h-[30px]'>
                        <Image src={appleIcon} fill alt="apple-icon" className='w-full h-full'/>
                    </div>
                    <div className='relative w-[125.54px] h-[30px]'>
                        <Image src={adobeIcon} fill alt="adobe-icon" className='w-full h-full'/>
                    </div>
                    <div className='relative w-[118.56px] h-[30px]'>
                        <Image src={slackIcon} fill alt="slack-icon" className='w-full h-full'/>
                    </div>
                    <div className='relative w-[100.02px] h-[30px]'>
                        <Image src={spotifyIcon} fill alt="spotify-icon" className='w-full h-full'/>
                    </div>
                    <div className='relative w-[91.91px] h-[30px]'>
                        <Image src={googleIcon} fill alt="apple-icon" className='w-full h-full'/>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Brands