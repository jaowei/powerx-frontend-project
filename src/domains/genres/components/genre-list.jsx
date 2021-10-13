import { Link } from "react-router-dom";

export const GenreList = ({ data, currGenre }) => {
    return (
        <div className="py-3">
            <ul className="flex flex-col gap-y-5">
                {data && (
                    data.results.map((genre) => {
                        if (genre.slug === currGenre) {  
                            return (
                                <li key={genre.id} className="ml-5 border rounded-md bg-gray-500 opacity-30">
                                    <Link to={`/games/${genre.slug}`} className="text-white">
                                        {genre.name}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={genre.id} className="ml-5 transform hover:scale-110">
                                    <Link to={`/games/${genre.slug}`}>
                                        {genre.name}
                                    </Link>
                                </li>
                            )
                        }
                    })
                )}
            </ul>
        </div>
    )
}