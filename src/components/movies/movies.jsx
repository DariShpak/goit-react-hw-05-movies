// import axios from "axios"
import {useState, useEffect} from "react"
import {Form, Input, Section, MovieList, Wrapper} from "./movies.styled"
import getMovieByName from "fetches/FetchMovieByName"
import MovieGallery from "components/movieGallery/movieGallery"

const MoviesSearch = () => {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])

  const onHandleSearch = event => {
    event.preventDefault()
    const inputValue = event.target[0].value.toLowerCase()
    setName(inputValue)
    setPage(1)
  }

  useEffect(
    () => {
      const fetchMovies = async () => {
        try {
          const response = await getMovieByName(name, page)
          const newMovies = response.data.results
          console.log(newMovies)
          setMovies([...newMovies])
        } catch (error) {
          console.log(error)
        }
      }

      fetchMovies()
    },
    [name, page]
  )

  return <Section>
      <Form onSubmit={onHandleSearch}>
        <Input type="text" name="name" autoComplete="off" placeholder="Search a movie" onChange={onHandleSearch} />
      </Form>
      <Wrapper>
        <MovieList>
          {movies && movies.map(({id, title, poster_path, }) =>
            <MovieGallery key={id} title={title} poster={poster_path}  />
            )}
        </MovieList>
      </Wrapper>
    </Section>
}

export default MoviesSearch
