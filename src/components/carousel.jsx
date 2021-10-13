import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const Carousel = ({ data }) => {
    const [currentGameIdx, setCurrentGameIdx] = useState(0)

    return (
        <div className="relative flex mx-auto max-w-4xl items-center justify-center z-0">
            <div className="absolute left-0">
                <button 
                    className="rounded-full bg-gray-200" 
                    onClick={() => (
                        setCurrentGameIdx(Math.max(currentGameIdx - 1,0))
                    )}
                >
                    <ChevronLeftIcon className="w-7 h-7" />
                </button>
            </div>
            <div className="absolute right-0">
                <button 
                    className="rounded-full bg-gray-200" 
                    onClick={() => (
                        setCurrentGameIdx(Math.min(currentGameIdx + 1, 4))
                    )}
                >
                    <ChevronRightIcon className="w-7 h-7" />
                </button>
            </div>

            <Link to={data && `/game/${data.results[currentGameIdx].id}`} className="max-w-4xl max-h-full object-cover overflow-hidden">
                <div className="hover:bg-white z-10">
                    <img src={data && data.results[currentGameIdx].background_image} alt="" />
                </div>
            </Link>

            <div className="absolute left-0 bottom-0 ml-10 mb-10">
                <div className="text-4xl font-bold text-white">
                    {data && data.results[currentGameIdx].name}
                </div>
            </div>

            <div className="absolute right-0 top-0 bg-green-500 p-3">
                <div className="text-3xl font-bold text-white">
                    {data && (
                        `${data.results[currentGameIdx].rating} / ${data.results[currentGameIdx].rating_top}`
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 mb-3 flex gap-1">
                {data &&
                    data.results.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`cursor-pointer rounded-full py-1 px-5 bg-gray-400 bg-opacity-60 hover:bg-opacity-100 ${currentGameIdx === idx ? 'bg-opacity-100': null}`}
                            onClick={() => setCurrentGameIdx(idx)}
                        >
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
