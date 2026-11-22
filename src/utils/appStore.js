import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptSearchReducer from "./gptSlice"
import langSliceReducer from "./langSlice"


const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    lang: langSliceReducer
  }
})

export default appStore