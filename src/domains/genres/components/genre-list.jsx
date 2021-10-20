import { Link } from "react-router-dom";

export const GenreList = ({ data, currGenre }) => {
    return (
        <div className="py-3">
            <ul className="flex flex-col flex-shrink gap-y-5">
                {data && (
                    data.results.map((genre) => {
                        if (genre.slug === currGenre) {  
                            return (
                                <li key={genre.id} className="ml-2 pl-2 border rounded-lg bg-gray-500 opacity-30">
                                    <Link to={`/games/${genre.slug}`} className="text-white">
                                        {genre.name}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={genre.id} className="rounded-lg pl-2 ml-2 transform hover:scale-110 hover:bg-gray-500">
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