import { useState } from 'react'

import { SearchBar } from "components/search"
import { GameCard } from "./game-card"
import { GenreList } from "domains/genres";
import { useGenres } from "domains/genres";

import { useListedGames } from '../hooks/use-games';
import { useFavGames } from '../hooks/use-fav-games'

import { GiGamepad } from "react-icons/gi"

export const GamesListing = (props) => {
    const [searchVal, setSearchVal] = useState('')
    const genres = useGenres(19)
    const games = useListedGames(1, 36, props.genre, searchVal)
    const { favData, setFavData, removeFromFavourites } = useFavGames()
  
      return (
          <div>
              <SearchBar 
                setSearchVal={setSearchVal}
              />
              <div className="grid grid-cols-12 gap-1 max-w-7xl mx-auto">
                  <div className="col-span-9">
                    {games.isLoading && (
                      <div className="flex p-12 text-center content-center justify-center">
                        <GiGamepad className="h-20 w-20 animate-spin" />
                      </div>
                    )}
                      <div className="grid grid-cols-4 grid-rows-9 gap-3 max-w-5xl mx-auto">
                          {games.data && games.data.results.map((game) => (
                              <GameCard
                                  key={game.id}
                                  gameId={game.id} 
                                  image={game.background_image}
                                  name={game.name}
                                  tags={game.tags}
                                  platforms={game.parent_platforms}
                                  metacritic={game.metacritic}
                                  favData={favData}
                                  setFavData={setFavData}
                                  removeFav={removeFromFavourites}
                              />
                          ))}
                      </div>
                  </div>
                  <div className="col-span-3 ml-12">
                      <span className="text-bold text-2xl underline">Filter by Genre:</span>
                      <GenreList 
                        data={genres.data}
                        currGenre={props.genre}
                      />
                  </div>
              </div>
          </div>
      )
}