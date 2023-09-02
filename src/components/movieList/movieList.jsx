import React from "react"
import {Li, CardWrapper, Img, H2} from "./movieList.styled"
import PropTypes from "prop-types"

const MovieList = ({title, poster}) => {
  const defaultPoster = "https://www.movienewz.com/img/films/poster-holder.jpg"

  const handleImageError = event => {
    event.target.src = defaultPoster
  }

  return (
    <Li>
      <CardWrapper>
        <Img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          width="197"
          height="287"
          loading="lazy"
          onError={handleImageError}
        />

        <H2>
          {title}
        </H2>
      </CardWrapper>
    </Li>
  )
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
}

export default MovieList
