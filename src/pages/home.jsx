import { GenreBlock } from "domains/genres/components/genre-block";
import { Carousel } from "components/carousel";
import { Link } from "react-router-dom";
import { useFeaturedGames } from "domains/games";
import { useGenres } from "domains/genres";
import { RiShieldStarFill } from "react-icons/ri"

export const Home = () => {
  const games = useFeaturedGames(1, 5);
  const genres = useGenres(9);

  return (
    <div>
        <div className="mx-auto max-w-4xl my-3">
            <Link to="/games" className="transform hover:scale-110">
            <div className="text-xl font-bold underline hover:text-gray-900 mb-3">
                Explore Games
            </div>
            </Link>

            {games.isLoading && (
            <div className="flex p-12 content-center justify-center">
                <RiShieldStarFill className="h-20 w-20 animation-spin" />
            </div>
            )}
            <Carousel data={games.data} />
        </div>
        <GenreBlock data={genres.data} />
    </div>
  );
};
