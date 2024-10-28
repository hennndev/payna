"use client"
import React from 'react'
import Link from 'next/link'
import Logo from '@/app/components/UI/Logo'

const Header = () => {
    return (
        <header className='container mt-[40px] mb-[100px]'>
            <section className='flex-between'>
                <Logo/>
                <section className='flexx space-x-[60px]'>
                    <Link href='#' className='text-primary text-[16px] font-normal hover:font-semibold'>Home</Link>
                    <Link href='#' className='text-primary text-[16px] font-normal hover:font-semibold'>Features</Link>
                    <Link href='#' className='text-primary text-[16px] font-normal hover:font-semibold'>Showcase</Link>
                    <Link href='#' className='text-primary text-[16px] font-normal hover:font-semibold'>Pricing</Link>
                </section>

                <button className='bg-gray-primary w-[150px] h-[48px] rounded-[50px] text-[16px] text-center'>Sign In</button>
            </section> 
        </header>
    )
}

export default Header