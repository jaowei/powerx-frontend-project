import { Link } from "react-router-dom";
import { PlatformBar } from "components/platform-bar";

export const GameCard = (props) => {
    return (
        <div className="py-3">
            <Link to="/game/:gameId">
                <div className="border-4 border-gray-600 rounded-lg"> 
                    <div className="relative overflow-hidden h-0 opacity-80 aspect-w-10 aspect-h-11 cursor-pointer">
                        <img src={props.image} alt="" className="absolute min-w-full min-h-full top-0 left-0"/>
                    </div>
                    <div className="flex flex-col bg-gray-800 text-white pl-3">
                        <span className="mt-3">
                            {props.name}
                        </span>
                        <span className="text-sm text-gray-400">
                            Metacritic Rating: {props.metacritic}
                        </span>
                        <span className="my-5">
                            <PlatformBar data={props.platforms}/>
                        </span>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}