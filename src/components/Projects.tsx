import React from 'react'
import { CardStack } from './ui/stackCard'
import { projectItems } from '@/data';

export function genTechsForProj(techNames: string[], techImages: string[]): React.ReactNode {
    return (
        <div className='flex justify-center items-center'>
            {techImages.filter(srcName => srcName).map((srcName, idx) =>
                <img src={srcName} key={idx} alt="Project Image" className='w-1/4 h-auto ' />
            )}
        </div>
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