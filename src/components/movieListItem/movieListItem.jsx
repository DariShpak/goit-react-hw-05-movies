import React from "react"

import PropTypes from "prop-types"
import {CardWrapper, H2, Img, Li} from "./movieListItem.styled"

const MovieListItem = ({title, poster}) => {
  return (
    <Li>    <CardWrapper>
      <Img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
        width="207"
        height="307"
        loading="lazy"
      />
      <H2>
        {title}
      </H2>
    </CardWrapper></Li>

  )
}

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
export default MovieListItem
