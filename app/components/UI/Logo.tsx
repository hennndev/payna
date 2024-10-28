"use client"
import React from 'react'

const Logo = () => {
    return (
        <section className='flexx space-x-[12px]'>
            <div className='flex-evenly w-[48px] h-[34px] rounded-[10px] bg-gray-primary'>
                <div className='w-[12px] h-[12px] bg-blue-clr rounded-full'></div>
                <div className='w-[12px] h-[12px] bg-red-clr rounded-full'></div>
            </div>
            <h3 className='text-primary font-semibold text-[28px]'>Payna</h3>
        </section>
    )
}

export default Logo