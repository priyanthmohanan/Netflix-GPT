import { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if(!el) return;
    const onWheel = (e) => {
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      // at an edge and scrolling further that way -> let the page scroll
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  if (!movies?.length) return null;

  return (
    <div className="px-6 min-w-0 w-full">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div ref={rowRef} className="flex overflow-x-auto no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;