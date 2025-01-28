import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden w-full pt-10 pb-10 px-5" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 bottom-0 md:-bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center border rounded-3xl bg-tiger/20 mx-16 md:m-32 py-12">
                <h1 className="text-5xl md:text-6xl text-tiger-200 font-bold pb-12 md:pb-0">Still Here ?</h1>
                <a href="mailto:daniaudtom@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="my-10 md:my-0 md:text-base text-sm md:font-normal font-light text-neutral-400">
                    Copyright © 2025 Tom Daniaud
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <Link href={info.href} key={info.id}>
                            <div
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;