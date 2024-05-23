import React from 'react'

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from 'next/image';

function Experiance() {
    return (
        <div className="py-20 w-full">
            {/* SEO-friendly H2 with main skills */}
            <h2 className="heading">
                Years <span className="text-purple">of Expertise</span>
            </h2>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        // Remove random duration for now (use actual duration from data if available)
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image
                                width={100}
                                height={100}
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <h2 className="text-start text-gray-700 mt-3 font-semibold">
                                    {card.desc}
                                </h2>
                                {/* List keywords below description for better SEO and user understanding */}
                                <h3 className="text-start text-gray-400 mt-1">
                                    <ul className="list-disc">
                                        {card.keywords.map((keyword) => (
                                            <li className=' list-none inline-block border border-1 mr-1 mt-1 rounded-md' key={keyword}>
                                                <span className=' px-1'>{keyword}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </h3>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experiance