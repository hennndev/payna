import React from 'react'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import EmailSubscription from './components/EmailSubscription'

export const metadata = {
    title: "Payna | Home"
}

const Homepage = () => {
    return (
        <main className='flex flex-col space-y-[100px]'>
            <Hero/>
            <Brands/>
            <Features/>
            <EmailSubscription/>
        </main>
    )
}

export default Homepage