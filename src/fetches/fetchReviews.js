import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    )
    return response.data
  } catch (error) {
    console.error("Error fetching reviews:", error)
    throw error
  }
}

export default getMovieReviews
