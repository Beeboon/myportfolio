import React from 'react'
import { ExpandableCard } from './ui/expandableCard';
import Separator from './ui/Separator';
import { cards } from '@/data/projects';

function Projects() {
    return (
        <div className='h-screen w-full flex flex-row items-center justify-center my-40 border'>
            <span className=''>
                <h2
                    className='text-center text-5xl font-bold text-teal-400 border'
                    style={{ transform: "rotate(-90deg)" }}
                >My Projects</h2>
            </span>
            <Separator orientation='vertical' />
            <ExpandableCard cards={cards} className="w-2/3" />
        </div>
    )
}

export default Projects