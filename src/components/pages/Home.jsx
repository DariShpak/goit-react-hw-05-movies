import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {getTrendingMovies} from "fetches/FetchTrendings"
import MovieCard from "components/movieListItem/movieListItem"
import {Ul, Wrapper, H1} from "components/home/home.styled"

const Home = () => {
  const [trendings, setTrendings] = useState([])

  useEffect(() => {
    fetchTrendings()
  }, [])

  const fetchTrendings = async () => {
    try {
      const response = await getTrendingMovies()
      const newTrendings = response.data.results
      setTrendings([...newTrendings])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Wrapper>
      <H1>Trending Now</H1>
      <Ul>
        {trendings &&
          trendings.map(({id, title, poster_path}) =>
            <Link to={`/movies/${id}`} key={id}>
              <MovieCard title={title} alt={title} poster_path={poster_path} />
            </Link>
          )}
      </Ul>
    </Wrapper>
  )
}

export default Home
