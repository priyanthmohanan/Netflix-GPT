import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, BASE_URL } from '../utils/constant';
import { addUpComingMovies } from "../utils/moviesSlice";


const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovie = useSelector(store=>store.movies.upComingMovies)

  const upComingMovies = async () => {
    const data = await fetch(BASE_URL + "/movie/upcoming?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpComingMovies(json.results))
  }

  useEffect(() => {
    !upComingMovie && upComingMovies();
  }, [])
}

export default useUpComingMovies