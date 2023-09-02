import React from "react"
import MovieList from "components/movieList/movieList"
import { Link } from "react-router-dom"
import {
  Form,
  Input,
  Section,
  Ul,
  Wrapper,
  Button,
  Error,
  ErrorText,

} from "components/movies/movies.styled"
import PropTypes from "prop-types"

const MoviesComponent = ({movies, error, onSubmit, onChange}) => {
  return <Section>
      <Form onSubmit={onSubmit}>
        <Input type="text" name="name" autoComplete="off" placeholder="Search a movie" onChange={onChange} />
        <Button type="submit">GO</Button>
      </Form>

      <Wrapper>
        {error && <Error>
            <ErrorText>
              "{error}"
            </ErrorText>
          </Error>}

        <Ul>
          {movies && movies.map(({id, title, poster_path}) =>
              <Link key={id} to={`/movies/${id}`}>
                <MovieList key={id} title={title} poster={poster_path} />
              </Link>
            )}
        </Ul>
      </Wrapper>
    </Section>
}

MoviesComponent.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default MoviesComponent
