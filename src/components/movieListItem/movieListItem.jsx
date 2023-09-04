import React from "react"
import { IMG_PATH } from "utils/IMG_PATH"
import PropTypes from "prop-types"
import {CardWrapper, H2, Img, Li} from "./movieListItem.styled"

const MovieListItem = ({title, poster}) => {
  return (
    <Li>
      <CardWrapper>
      <Img
        src={`${IMG_PATH}${poster}`}
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
