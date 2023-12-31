import React from "react"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import getMovieDetails from "utils/fetches/fetchMovieDetails"
import {LoaderIcon} from "components/loader/loader"
import {
  Wrapper,
  Title,
  Img,
  Text,
  TextBlock,
  Tagline,
  List,
  GenresItem
} from "components/movieDetailsItem/movieDetailsItem.styled"
import {IMG_PATH} from "utils/IMG_PATH"

const MovieDetailsItem = () => {
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [genres, setGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const allGenres = genres.map(genre => genre.name)

  const defaultPoster = "https://www.movienewz.com/img/films/poster-holder.jpg"

  const handleImageError = event => {
    event.target.src = defaultPoster
  }

  useEffect(
    () => {
      const fetchMovieDetails = async () => {
        try {
          setIsLoading(true)
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
          setIsLoading(false)
        }
      }
      fetchMovieDetails()
    },
    [movieId]
  )

  return (
    <Wrapper>
      {isLoading && <LoaderIcon />}

      <Img
        src={`${IMG_PATH}${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width="280"
        height="421"
        loading="lazy"
        onError={handleImageError}
      />
      <TextBlock>
        <Title>
          {movieDetails.title}
        </Title>
        <Tagline>
          {movieDetails.tagline}
        </Tagline>
        <List>
          <GenresItem>
            <Text>
              ☆ {movieDetails.vote_average}
            </Text>
          </GenresItem>
          <GenresItem>
            <Text>
              {movieDetails.release_date}
            </Text>
          </GenresItem>
        </List>
        <List>
          {allGenres.map(genre => {
            return (
              <GenresItem key={genre}>
                <Text>
                  {genre}
                </Text>
              </GenresItem>
            )
          })}
        </List>

        <Text>
          {movieDetails.overview}
        </Text>
      </TextBlock>
    </Wrapper>
  )
}

export default MovieDetailsItem
