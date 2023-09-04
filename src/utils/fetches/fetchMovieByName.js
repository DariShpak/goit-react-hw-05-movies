import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const getMovieByName = async (name, page = 1) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?&query=${name}&page=${page}&api_key=${API_KEY}`
    )
    return response.data
  } catch (error) {
    console.error("Error fetching movies:", error)
    throw error
  }
}

export default getMovieByName
