import {useParams, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import getMovieDetails from "fetches/FetchMovieDetails"
import MovieDetailsItem from "components/movieDetails/movieDetailsItem"

const MovieDetails = () => {
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [genres, setGenres] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  const allGenres = genres.map(genre => genre.name)

  useEffect(
    () => {
      const fetchMovieDetails = async () => {
        try {
          // setIsLoading(true)
          const response = await getMovieDetails(movieId)
          const movieData = response.data

          const releaseDate = movieData.release_date.slice(0, 4)
        const voteAverage = movieData.vote_average.toFixed(2)

          setMovieDetails({
            ...movieData,
            release_date: releaseDate,
            vote_average: voteAverage
          })
          setGenres(movieData.genres)
        } catch (error) {
          console.log(error)
        } finally {
          // setIsLoading(false)
        }
      }
      fetchMovieDetails()
    },
    [movieId]
  )

  return (
    <div>
      <Link to="/">Back</Link>
      <MovieDetailsItem
        title={movieDetails.title}
        genres={allGenres}
        overview={movieDetails.overview}
        poster={movieDetails.poster_path}
        release={movieDetails.release_date}
        tagline={movieDetails.tagline}
        vote={movieDetails.vote_average}
      />
      <Link to="/cast">Cast</Link>
      <Link to="/reviews">Reviews</Link>
    </div>
  )
}

export default MovieDetails
