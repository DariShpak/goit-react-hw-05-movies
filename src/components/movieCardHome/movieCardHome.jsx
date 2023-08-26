import React from "react"

import PropTypes from "prop-types"
import { CardWrapper, Li, H2, Img} from "./movieCard.styled"



const MovieCard = ({title, poster_path}) => {
  return <Li>
      <CardWrapper>
        <Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="197" height="287"/>
        <H2>
          {title}
        </H2>
      </CardWrapper>
    </Li>
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired
}
export default MovieCard
