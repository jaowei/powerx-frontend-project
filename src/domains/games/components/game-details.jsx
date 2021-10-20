import { Link } from 'react-router-dom'

import { Carousel } from 'components/carousel'
import { SidePanel } from 'components/side-panel'
import { Pill } from 'components/pill'
import { GameCard } from "./game-card"

import { useGameDetails, useGameMedia } from '../hooks/use-games'
import { useFavGames } from '../hooks/use-fav-games' 

import { parseResultsData } from "libs/parseResultData";

import { GiGamepad } from "react-icons/gi"
import { HeartIcon } from "@heroicons/react/solid";

export const GameDetails = (props) => {
    const gameId = props.gameId
    const game = useGameDetails(gameId)
    const screenshots = useGameMedia(gameId, 'screenshots')
    const stores = useGameMedia(gameId, 'stores')
    const gameSeries = useGameMedia(gameId, 'game-series')
    const { data, setData, removeFromFavourites } = useFavGames()

    return (
        <div className="grid grid-cols-12 gap-1 max-w-7xl mx-auto" >
            <div className="col-span-9">
                {game.isLoading && (
                    <div className="p-12 text-center content-center justify-center">
                        <GiGamepad className="h-45 w-45 animate-spin" />
                    </div>
                )}
                <div className="w-5/6 mx-auto py-8">
                    {game.isSuccess &&
                    <span className="text-5xl font-bold">
                        {game.data.name}
                        <span className="pl-3">
                            {data.includes(props.gameId) ? (
                                <button 
                                    className="pr-5 transform hover:scale-110"
                                    onClick={() => removeFromFavourites(props.gameId)}
                                >
                                    <HeartIcon className="w-8 h-8 text-red-600 hover:text-gray-400" />
                                </button>
                            ) : 
                                <button 
                                    className="pr-5 transform hover:scale-110"
                                    onClick={() => setData([...data, props.gameId])}
                                >
                                    <HeartIcon className="w-8 h-8 text-gray-400 hover:text-red-600" />
                                </button>
                            }
                        </span>
                    </span>
                    }
                    <div className="py-8">
                        {screenshots.isSuccess && game.isSuccess && (
                            <Carousel 
                                image={parseResultsData(screenshots.data.results, 'image')}
                                arr={screenshots.data.results}
                            />
                        )}
                    </div>
                    <div className="divide-y-2 divide-green-700">
                        {game.isSuccess && (
                            <div className="flex flex-col gap-y-3 divide-y-2 divide-green-700">
                                <div className="flex flex-row flex-wrap content-center items-center divide-x-2 gap-y-2">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="border rounded-full bg-green-600 h-12 w-12 opacity-70 flex items-center justify-center text-white font-bold">
                                            {game.data.rating}
                                        </div>
                                        <span className="mt-1 text-xs text-gray-800">
                                            {game.data.ratings[0].title.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="ml-3 px-3 font-semibold">
                                        {game.data.ratings_count} reviews
                                    </div>
                                    {game.data.genres.map((genre) => (
                                        <Pill key={genre.id}>
                                            <Link to={`/games/${genre.slug}`}>{genre.name}</Link>
                                            
                                        </Pill>
                                    ))}
                                </div>
                                <div className="text-justify py-3">
                                    <span className="text-xl text-green-700 pr-1">
                                        Description: 
                                    </span> 
                                    {game.data.description_raw}
                                </div>
                                {stores.isSuccess && (
                                    <div className="py-3 flex flex-row flex-wrap">
                                        <span className="text-xl text-green-700 pr-1">Where to buy:</span>
                                        {game.data.stores.map((store) => {
                                            let link = stores.data.results.filter((link) => 
                                                link.id === store.id
                                            )
                                            return (
                                                <Pill key={store.id} color="gray">
                                                    <a href={link[0].url} target="_blank" rel="noreferrer">{store.store.name}</a>
                                                </Pill>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                        {gameSeries.isSuccess && (
                            <div className="py-3">
                                <span className="text-xl text-green-700 pr-1">Games in this series:</span>
                                <div className="grid grid-cols-3 gap-2">
                                        {gameSeries.data.results.map((game) => (
                                            <GameCard 
                                                key={game.id}
                                                id={game.id}
                                                image={game.background_image}
                                                name={game.name}
                                                metacritic={game.metacritic}
                                                platforms={game.parent_platforms}
                                            />
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="py-8">
                    {game.isSuccess && (
                        <SidePanel
                            image={game.data.background_image_additional}
                            publishers={parseResultsData(game.data.publishers, 'name')}
                            developers={parseResultsData(game.data.developers, 'name')}
                            released={game.data.released}
                            playtime={game.data.playtime}
                            parentPlatforms={game.data.parent_platforms}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}