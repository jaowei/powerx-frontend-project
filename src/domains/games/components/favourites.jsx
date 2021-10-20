import { GameCard } from "./game-card"
import { FaSadCry, FaHeart, FaTrashAlt } from "react-icons/fa"
import { useFavGames } from "../hooks/use-fav-games"

export const Favourites = () => {
    const { removeFromFavourites, query } = useFavGames()

    return (
        <div >
            <div className="flex items-center gap-3 text-xl font-bold hover:text-gray-900 mb-3">
                <FaHeart className="h-5 w-5 text-red-600"/>
                Your Favourites
            </div>
            <div className="grid grid-cols-4 auto-rows-auto gap-2 mb-5 items-start">
                {query.length > 0 ? (query.map((queryObj) => {
                    if (queryObj.isSuccess) {
                        return (
                            <div className="flex flex-col justify-center">
                                <GameCard 
                                    key={queryObj.data.id}
                                    gameId={queryObj.data.id}
                                    image={queryObj.data.background_image}
                                    name={queryObj.data.name}
                                    metacritic={queryObj.data.metacritic}
                                    platforms={queryObj.data.parent_platforms}
                                />
                                <button 
                                    className="flex flex-row items-center justify-center border rounded-lg bg-red-300 hover:bg-red-500 text-red-800"
                                    onClick={() => {
                                        console.log('clicked')
                                        removeFromFavourites(queryObj.data.id)}}
                                >
                                    <FaTrashAlt className="h-5 w-5" />
                                    <span className="ml-2 py-1">Remove</span>
                                </button>
                            </div>
                    )} else {
                        return (
                            <div>Loading...</div>
                        )
                    }
                })) : (
                    <div className="col-span-4 flex flex-col items-center">
                        <FaSadCry className="h-5 w-5" />
                        <div className="text-md">No Favourite Games</div>
                        <div className="text-sm">Explore games below to add them to this list</div>
                    </div>
                )}
            </div>
        </div>
    )
}