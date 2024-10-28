import React from 'react'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'

const Homepage = () => {
    return (
        <main className='flex flex-col space-y-[100px]'>
            <Hero/>
            <Brands/>
            <Features/>
        </main>
    )
}

export default Homepage