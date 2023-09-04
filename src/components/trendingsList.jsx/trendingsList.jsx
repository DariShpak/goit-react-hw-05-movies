import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import getTrendingMovies from "utils/fetches/fetchTrendings";
import { LoaderIcon } from "components/loader/loader"
import MoviesListItem from "components/moviesListItem/moviesListItem";
import ErrorSection from "components/error/error";
import { H1, Wrapper, Ul } from "./trendingsList.styled";


const TrendingsList = () => {
  const location = useLocation();
  const [trendings, setTrendings] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchTrendings()
  }, [])

  const fetchTrendings = async () => {
    try {
      setIsLoading(true)
      const response = await getTrendingMovies()
      const newTrendings = response.data.results
      setTrendings([...newTrendings])
      setError(null) 
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      {isLoading && <LoaderIcon />}
      {error && <ErrorSection error={error} /> }
      <Wrapper>
      <H1>Trending Today</H1>
      <Ul>
        {trendings && trendings.map(({id, title, poster_path}) =>
          <Link to={`/movies/${id}`} state={{from: location}} key={id}>
              <MoviesListItem title={title} poster={poster_path} />
            </Link>
          )}
      </Ul>
    </Wrapper>
    </>
  )
}


export default TrendingsList
