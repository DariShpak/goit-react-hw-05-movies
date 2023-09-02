import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const timeWindow = "day"

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${API_KEY}`
    )

    return response
  } catch (error) {
    console.error("Error fetching cast:", error)
    throw error
  }
}

export default getTrendingMovies
