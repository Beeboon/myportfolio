import React from 'react'
import Highlight from './ui/highlight-text';
import { TextGenerateEffect } from './ui/textGenerateEffect'

function Hero() {
    return (
        <div
            className='z-30 w-screen h-screen flex items-center justify-center'
            style={{ background: "radial-gradient(circle at top left, yellow 5%, #0d9488 25%, #115e59 45%)" }}
        >
            <div className='flex flex-col items-center justify-center'>
                <TextGenerateEffect
                    words='Make Internet Surfable'
                    className='uppercase'
                />
                <p className="px-5 py-10 text-center group text-teal-950">
                    Hello I&apos;m{" "}
                    <Highlight className="group-hover:bg-yellow-600/70 transition-all duration-300 ease-in-out">
                        Tom
                    </Highlight>,
                    welcome to my portfolio and let&apos;s introduce me
                </p>
            </div>
        </div>
    );
}

export default Hero