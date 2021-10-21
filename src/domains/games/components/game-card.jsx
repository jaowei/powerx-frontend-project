import { Link } from "react-router-dom";
import { PlatformBar } from "components/platform-bar";
import { HeartIcon } from "@heroicons/react/solid";

export const GameCard = (props) => {
    return (
        <div className="py-3">  
            <div className="border-4 border-gray-600 rounded-lg">
                <Link to={`/game/${props.gameId}`}> 
                    <div className="relative overflow-hidden h-0 opacity-80 aspect-w-10 aspect-h-11 cursor-pointer">
                        <img src={props.image} alt="" className="absolute min-w-full min-h-full top-0 left-0"/>
                    </div>
                </Link>
                <div className="flex flex-row flex-wrap bg-gray-800 text-white pl-3 items-center justify-between">
                    <div className="flex flex-col">
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
                    {props.favData && (props.favData.includes(props.gameId) ? (
                        <button 
                            className="pr-3 pb-3 transform hover:scale-110"
                            onClick={() => props.removeFav(props.gameId)}
                        >
                            <HeartIcon className="w-4 h-4 text-red-600 hover:text-gray-400" />
                        </button>
                    ) : 
                        <button 
                            className="pr-3 pb-3 transform hover:scale-110"
                            onClick={() => props.setFavData([...props.favData, props.gameId])}
                        >
                            <HeartIcon className="w-4 h-4 text-gray-400 hover:text-red-600" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}