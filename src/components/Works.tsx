import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { worksItems } from "@/data/works";

function Works() {

    return (
        <div className="w-full mb-20">
            <Timeline data={worksItems} />
        </div>
    );
}

export default Works;
