import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const getCast = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )

    return response
  } catch (error) {
    console.error("Error fetching cast:", error)
    throw error
  }
}

export default getCast
