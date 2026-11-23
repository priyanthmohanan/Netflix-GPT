import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, BASE_URL } from '../utils/constant';
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector(store=>store.movies.nowPlayingMovies)

  const nowPlayingMovies = async () => {
    const data = await fetch(BASE_URL +"/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    !nowPlayingMovie && nowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies