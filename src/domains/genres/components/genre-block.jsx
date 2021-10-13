import { Link } from "react-router-dom";

export const GenreBlock = ({ data }) => {
  return (
    <div className="mx-auto max-w-4xl my-3">
      <div className="text-xl font-bold underline hover:text-gray-900 mb-3">
          Explore Genres
      </div>
      <div className="grid grid-cols-3 grid-rows-3">
        {data && (
            data.results.map((item) => (
              <Link to={`/games/${item.slug}`} key={item.id}>
                <div className="relative overflow-hidden h-0 aspect-w-5 aspect-h-5 cursor-pointer hover:opacity-50">
                  <img 
                      src={item.image_background}
                      alt=""
                      className="absolute min-w-full min-h-full top-0 left-0"
                  />
                  <div className="absolute text-4xl text-center font-bold bg-gray-500 text-white opacity-10 hover:opacity-60">
                    {item.name}
                  </div>
                </div>
              </Link>
            ))
        )}
      </div>
    </div>
  );
};
