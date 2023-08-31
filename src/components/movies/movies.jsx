// import axios from "axios"
import {useState, useEffect} from "react"
import {Form, Input, Section, MovieList, Wrapper, Button} from "./movies.styled"
import getMovieByName from "fetches/FetchMovieByName"
import MovieGallery from "components/movieList/movieList"

const MoviesSearch = () => {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState(false)

  const onHandleSearch = event => {
    event.preventDefault()
    const inputValue = event.target.value

    setName(inputValue)
    setPage(1)
  }

  const handleSearchSubmit = event => {
    event.preventDefault()
    setSearch(true)
  }

  useEffect(
    () => {
      const fetchMovies = async () => {
        try {
          const response = await getMovieByName(name, page)
          const newMovies = response.results
          setMovies([...newMovies])
          setSearch(false)
        } catch (error) {
          console.log(error)
          setSearch(false)
        }
      }
      if (search) {
        fetchMovies()
      }
    },
    [name, page, search]
  )

  return (
    <Section>
      <Form onSubmit={handleSearchSubmit}>
        <Input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Search a movie"
          onChange={onHandleSearch}
        />
        <Button type="submit">GO</Button>
      </Form>
      <Wrapper>
        <MovieList>
          {movies &&
            movies.map(({id, title, poster_path}) =>
              <MovieGallery key={id} title={title} poster={poster_path} />
            )}
        </MovieList>
      </Wrapper>
    </Section>
  )
}

export default MoviesSearch
