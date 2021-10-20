import { Link } from "react-router-dom";

export const GenreBlock = ({ data }) => {
  return (
    <div>
      <div className="text-xl font-bold underline hover:text-gray-900 mb-3">
        Explore Genres
      </div>
      <div className="grid grid-cols-3 grid-rows-3">
        {data &&
          data.results.map((item) => (
            <Link to={`/games/${item.slug}`} key={item.id}>
              <div className="aspect-w-5 aspect-h-5 cursor-pointer hover:opacity-50">
                <img
                  src={item.image_background}
                  alt=""
                  className="absolute top-0 left-0 opacity-75"
                />
                <div className="flex justify-center items-center">
                  <div className="text-white text-5xl font-bold">{item.name}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};