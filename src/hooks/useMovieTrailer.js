import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { BASE_URL, API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  const trailerVideo = useSelector(store=>store.movies.trailerVideo)
  const getMovieVideos = async () => {
    const data = await fetch(BASE_URL + "/movie/" + movieId + "/videos", API_OPTIONS)
    const res = await data.json();
    const filteredData = res.results.filter(video => video.title === 'Trailer');
    const trailer = filteredData.length ? filteredData[0] : res.results[0];
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    !trailerVideo && getMovieVideos();
    return () => {
    }
  }, [])

}

export default useMovieTrailer;