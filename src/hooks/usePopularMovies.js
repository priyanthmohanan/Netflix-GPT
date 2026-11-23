import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, BASE_URL } from '../utils/constant';
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=>store.movies.popularMovies)

  const nowPopularMovies = async () => {
    const data = await fetch(BASE_URL +"/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    !popularMovies && nowPopularMovies();
  }, [])
}

export default usePopularMovies