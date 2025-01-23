import React from 'react'
import { CardStack } from './ui/stackCard'
import { projectItems } from '@/data';

export function genTechsForProj(techNames: string[], techImages: string[]): React.ReactNode {
    return (
        <p>

        </p>
    );
}

function Projects() {
    return (
        <div className='h-screen w-full flex flex-row items-center justify-center my-40 border border-red'>
            <span className=''>
                <h2
                    className='text-center text-5xl font-bold text-teal-400 border'
                    style={{ transform: "rotate(-90deg)" }}
                >My Projects</h2>
            </span>
            <CardStack items={projectItems} />
        </div>
    )
}

export default Projects