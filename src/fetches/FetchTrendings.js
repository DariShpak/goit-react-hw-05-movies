import axios from "axios"

const API_KEY = "c44bc15ca1931b55e279cdae9c283603"
const timeWindow = "day"

export const getTrendingMovies = async (page = 1) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
  )

  return response
}
