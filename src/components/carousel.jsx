import { useState } from "react";
import { ArrowButton } from "./arrow-button";
import { Link } from "react-router-dom";

export const Carousel = (props) => {
    const [currentGameIdx, setCurrentGameIdx] = useState(0)

    return (
        <div className="relative flex mx-auto max-w-4xl items-center justify-center z-0">
            <div className="absolute left-0">
                <ArrowButton 
                    dir='left' 
                    onClick={() => (
                        setCurrentGameIdx(Math.max(currentGameIdx - 1,0))
                    )} 
                />
            </div>
            <div className="absolute right-0">
                <ArrowButton 
                    dir='right'
                    onClick={() => (
                        setCurrentGameIdx(Math.min(currentGameIdx + 1, props.arr.length - 1))
                    )} 
                />
            </div>

            {props.id ? (
                <Link to={props.id && `/game/${props.id[currentGameIdx]}`} className="max-w-4xl max-h-full object-cover overflow-hidden">
                    <div className="hover:bg-white z-10">
                        <img src={props.image[currentGameIdx]} alt="" />
                    </div>
                </Link>) : (
                <div className="hover:bg-white">
                    <img src={props.image[currentGameIdx]} alt="" />
                </div>
            )}

            <div className="absolute left-0 bottom-0 ml-10 mb-10">
                <div className="text-4xl font-bold text-white">
                    {props.name && props.name[currentGameIdx]}
                </div>
            </div>

            {props.rating && (
                <div className="absolute right-0 top-0 bg-green-500 p-3">
                    <div className="text-3xl font-bold text-white">
                        {`${props.rating[currentGameIdx]} / ${props.topRating[currentGameIdx]}`}
                    </div>
                </div>
            )}
 
            <div className="absolute bottom-0 mb-3 flex gap-1">
                {props.arr.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`cursor-pointer rounded-full py-1 px-5 bg-gray-400 bg-opacity-60 hover:bg-opacity-100 ${currentGameIdx === idx ? 'bg-opacity-100': null}`}
                            onClick={() => setCurrentGameIdx(idx)}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
