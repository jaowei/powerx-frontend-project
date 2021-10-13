import { SearchBar } from "components/search"
import { GameCard } from "domains/games"
import { GenreList } from "domains/genres";
import { useGenres } from "domains/genres";
import { useListedGames } from "domains/games";
import { GiGamepad } from "react-icons/gi"

export const GamesListing = (props) => {
  const genres = useGenres(19)
  const games = useListedGames(1, 36, props.genre)

    return (
        <div>
            <SearchBar />
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
                                image={game.background_image}
                                name={game.name}
                                tags={game.tags}
                                platforms={game.parent_platforms}
                                metacritic={game.metacritic}
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