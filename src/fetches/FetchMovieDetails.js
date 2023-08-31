import axios from "axios"
import {API_KEY} from "utils/API_KEY"

const getMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  )
 return response
}

export default getMovieDetails