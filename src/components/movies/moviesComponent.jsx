import { useState, useEffect, useMemo } from "react"
import MovieList from "components/movieList/movieList"
import { Link } from "react-router-dom"
import MovieSearchForm from "components/searchMovieForm.jsx/searchMovieForm"
import getMovieByName from "fetches/fetchMovieByName"
import InfiniteScroll from "react-infinite-scroll-component"
import { LoaderIcon } from "components/loader/loader"
import {Section,Ul,Wrapper} from "components/movies/movies.styled"
import ErrorSection from "components/error/error"

const MoviesComponent = () => {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onHandleSearch = event => {
    event.preventDefault()
    const inputValue = event.target.value

    setName(inputValue)
    setPage(1)
    setMovies([])
    setError(null)
  }

  const handleSearchSubmit = event => {
    event.preventDefault()
    setSearch(true)
  }

  const fetchMovies = useMemo(
    () =>
      async function() {
        try {
          setIsLoading(true)
          const response = await getMovieByName(name, page)
          const newMovies = response.results

          setMovies(prevMovies => [...prevMovies, ...newMovies])
          setPage(prevPage => prevPage + 1)
          setSearch(false)
          setError(null)

          if (page === 100) {
            setHasMore(false)
          }
        } catch (error) {
          setError(error)
          setSearch(false)
        } finally {
          setIsLoading(false)
        }
      },
    [name, page]
  )

  const loadMoreMovies = () => {
    if (!search) {
      fetchMovies()
    }
  }

  useEffect(
    () => {
      if (search) {
        fetchMovies()
      }
    },
    [fetchMovies, search]
  )

  return (
    <>
      <MovieSearchForm onSubmit={handleSearchSubmit} onChange={onHandleSearch} />
      {error && <ErrorSection error={ error } />}
      <Section>
         <InfiniteScroll
          dataLength={movies.length}
          next={loadMoreMovies}
          style={{overflow: "hidden"}}
          hasMore={hasMore}
          loader={isLoading && <LoaderIcon />}
        >
   <Wrapper>
          <Ul>
          {movies &&
            movies.map(({id, title, poster_path}) =>
              <Link key={id} to={`/movies/${id}`}>
                <MovieList key={id} title={title} poster={poster_path} />
              </Link>
            )}
          </Ul>
        </Wrapper>
      </InfiniteScroll>
      
       
      </Section>
    </>
    
  )
}


export default MoviesComponent
