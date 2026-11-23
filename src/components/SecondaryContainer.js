import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="bg-black">
      <div className="md:-mt-36 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
      <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
    </div>
  )
}
export default SecondaryContainer

