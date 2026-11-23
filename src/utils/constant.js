export const LOGO = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAT4DsJqpLaLn4NdWj0hMqiS44NBBHsef6fJbMCXfInwFPyWRZWORRKIX6OoMypwFbV-skx1kkO0bw5qyPw4TGYECuHYwI_zw-n7CzjzEILCnaUNLQfmgkh-p1HzjExVEw9zDBrZd_di2.svg"

export const DEFAULT_USER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU5gJUj46ufL6FQfX3XvM7lR7qtcMy63tuj2siLuUQ&s=10"

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY
  },
}

export const BASE_URL = "https://api.themoviedb.org/3"

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg"

export const LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
  { identifier: "ar", name: "Arabic" },
  { identifier: "fr", name: "French" },
];


export const GROQ_KEY = process.env.REACT_APP_GROQ_KEY