import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);

  const scroll = (dir) =>
    rowRef.current.scrollBy({ left: dir * 600, behavior: "smooth" });

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-0 top-0 h-full px-2 z-10 font-bold text-white text-4xl"
        >
          ‹
        </button>

        <div ref={rowRef} className="flex overflow-x-auto no-scrollbar">
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-0 h-full px-2 z-10 font-bold text-white text-4xl"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default MovieList;