
import { createSlice } from "@reduxjs/toolkit"


const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null
  },
  reducers: {
    showGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch
    },
    AddGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload
      state.movieResults = movieResults
      state.movieNames = movieNames
    },
  }
})
export const { showGptSearchView, AddGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;