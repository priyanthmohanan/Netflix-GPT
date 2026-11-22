import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, BASE_URL } from '../utils/constant';
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const data = await fetch(BASE_URL + "/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    topRatedMovies();
  }, [])
}

export default useTopRatedMovies