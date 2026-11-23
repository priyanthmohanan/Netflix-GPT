import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from 'react';
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { API_OPTIONS, BASE_URL } from "../utils/constant"
import { AddGptMovieResult } from "../utils/gptSlice"

const GptSearchBar = () => {
  const selectedLang = useSelector(store => store.lang.language)
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      BASE_URL + "/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchSubmit = async () => {
    console.log('search text', searchText.current.value);

    const gptQuery = "Suggest five movies name related to " + searchText.current.value + ", movie name should be comma separated with no additional information";

    // const models = await openai.models.list();
    // console.log("API Models",models.data.map((m) => m.id));

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: "openai/gpt-oss-20b",
    })

    const gptMovies = gptResults.choices ?.[0] ?.message ?.content.split(",");

    const tmdbResults = await Promise.all(
      gptMovies.map((movie) => searchMovieTMDB(movie.trim()))
    );

    if (tmdbResults) {
      dispatch(AddGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
    }
  }
  
  return (
    <div className=" pt-[35%] md:p-0 md:pt-[10%] flex justify-center items-center">
      <form onSubmit={(e) => e.preventDefault()} className=" w-screen md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button onClick={handleSearchSubmit} className="py-2 px-2 md:px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;