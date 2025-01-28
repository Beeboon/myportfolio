import { selfIntroduction } from '@/data';
import React, { JSX } from 'react';
import Image from "next/image";
import Highlight from './ui/highlight-text';
import { cn } from '@/lib/utils';

const formatText = (text: string, className: string): JSX.Element => {
    return (<p className={cn(className)}>{
        text.split(/(\/[^/]+\/)/).map((part, idx) => {
            if (part.startsWith("/") && part.endsWith("/")) {
                return (<Highlight key={idx}>
                    {part.slice(1, -1)}
                </Highlight>);
            } else { return part }
        })
    }</p>);
}

function WhoAmI() {
    return (
        <div className="mt-[10vh] space-y-10 relative p-[1px] bg-gradient-to-r from-transparent via-teal-300 to-transparent">
            <div className="bg-teal-800 rounded-lg group">
                <div className="flex flex-col items-center gap-5 py-6 px-5 md:px-20 md:flex-row space-y-0 md:space-x-6 ">
                    <Image
                        src="/me.webp"
                        width={200}
                        height={200}
                        className="rounded-full shadow-lg"
                        alt="Biography image"
                    />
                    <div>
                        <h2 className=" text-3xl text-teal-600 font-extrabold group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                            Who Am I
                        </h2>
                        {formatText(selfIntroduction, "md:text-lg text-teal-300 md:text-left ")}
                    </div>
                </div>
            </div>
        </div>



    )
}

export default WhoAmI