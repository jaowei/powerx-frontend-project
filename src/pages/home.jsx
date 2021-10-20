import { GenreBlock } from "domains/genres/components/genre-block";
import { Carousel } from "components/carousel";
import { Link } from "react-router-dom";
import { useFeaturedGames, Favourites } from "domains/games";
import { useGenres } from "domains/genres";
import { RiShieldStarFill } from "react-icons/ri"
import { parseResultsData } from "libs/parseResultData";

export const Home = () => {
  const games = useFeaturedGames(1, 5);
  const genres = useGenres(9);

  return (
    <div className="mx-auto max-w-4xl my-5">
        <Favourites />
        <div>
            <Link to="/games" className="transform hover:scale-110">
              <div className="text-xl font-bold underline hover:text-gray-900 mb-3 hover:text-green-800">
                  Explore Games
              </div>
            </Link>

            {games.isLoading && (
            <div className="flex p-12 content-center justify-center">
                <RiShieldStarFill className="h-20 w-20 animate-spin" />
            </div>
            )}

            {games.isSuccess && (
              <Carousel
                id={parseResultsData(games.data.results, 'id')}
                image={parseResultsData(games.data.results, 'background_image')}
                name={parseResultsData(games.data.results, 'name')}
                rating={parseResultsData(games.data.results, 'rating')}
                topRating={parseResultsData(games.data.results, 'rating_top')}
                arr={games.data.results}
              />
            )}

        </div>
        <GenreBlock data={genres.data} />
    </div>
  );
};
