import React, {useState, useEffect, useMemo} from "react"
import getMovieByName from "fetches/fetchMovieByName"
import { LoaderIcon } from "components/loader/loader"
import InfiniteScroll from "react-infinite-scroll-component"
import MoviesComponent from "components/movies/moviesComponent"

const Movies = () => {
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
      { isLoading && <LoaderIcon />}
      <InfiniteScroll
          dataLength={movies.length}
          next={loadMoreMovies}
          style={{overflow: "hidden"}}
          hasMore={hasMore}
          loader={isLoading && <LoaderIcon />}
        >
        <MoviesComponent movies={movies} error={error} onSubmit={handleSearchSubmit} onChange={onHandleSearch} />
      </InfiniteScroll>
    </>
  )
}

export default Movies
