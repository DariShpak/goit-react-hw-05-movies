import React from "react"
import {Link} from "react-router-dom"
import MovieListItem from "components/movieListItem/movieListItem"
import {H1, Wrapper, Ul} from "./home.styled"
import PropTypes from "prop-types"

const HomeIntro = ({trendings}) => {
  return (
    <Wrapper>
      <H1>Trending Now</H1>
      <Ul>
        {trendings &&
          trendings.map(({id, title, poster_path}) =>
            <Link to={`/movies/${id}`} key={id}>
              <MovieListItem title={title} alt={title} poster={poster_path} />
            </Link>
          )}
      </Ul>
    </Wrapper>
  )
}
HomeIntro.propTypes = {
  trendings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  )
}
export default HomeIntro
