import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, BASE_URL } from '../utils/constant';
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector(store=>store.movies.topRatedMovies)

  const topRatedMovies = async () => {
    const data = await fetch(BASE_URL + "/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    !topRatedMovie && topRatedMovies();
  }, [])
}

export default useTopRatedMovies