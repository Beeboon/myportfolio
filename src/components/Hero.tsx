import React from 'react'
import { TextGenerateEffect } from './ui/textGenerateEffect'

function Hero() {
    return (
        <div
            className='z-30 flex flex-col items-center justify-center h-screen mb-3'
            style={{ background: "radial-gradient(circle at top left, yellow 5%, #0d9488 25%, #115e59 45%)", }}
        >
            {/* <h1 className='text-center text-5xl p-1 text-teal-400 uppercase'>Make Internet Surfable</h1> */}
            < TextGenerateEffect
                words='Make Internet Surfable'
                className='text-center text-5xl p-1  uppercase'
            />
            <h2 className='' >Hello, I&apos;m Tom, welcome to my portfolio and let&apos;s introduce me</h2>
        </div >
    )
}

export default Hero