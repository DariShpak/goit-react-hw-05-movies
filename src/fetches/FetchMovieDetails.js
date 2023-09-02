import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
    )
    return response
  } catch (error) {
    console.error("Error fetching movies:", error)
    throw error
  }
}

export default getMovieDetails
