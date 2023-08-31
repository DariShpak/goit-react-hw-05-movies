import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const timeWindow = "day"

export const getTrendingMovies = async (page = 1) => {

  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
  )

  return response
}
