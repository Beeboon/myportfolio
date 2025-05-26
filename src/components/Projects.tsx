"use client";

import React from 'react'
import { ExpandableCard } from './ui/expandableCard';
import Separator from './ui/Separator';
import { cards } from '@/data/projects';


function Projects() {

    return (
        <div className='w-full md:px-10 my-12'>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-5xl font-bold text-teal-400 md:text-4xl mb-4 max-w-4xl">
                    My Projects
                </h2>
                <p className="text-neutral-400 text-sm md:text-base max-w-xl">
                    Explore a selection of my personal and collaborative projects that demonstrate my skills
                    in software development, problem-solving, and creative solutions.
                </p>
            </div>
            <ExpandableCard cards={cards} className='mb-32' />
            <Separator orientation='horizontal' />
        </div>
    )
}

export default Projects