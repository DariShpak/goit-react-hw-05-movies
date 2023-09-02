import React from "react"
import {CastListItem, Image, Text} from "./cast.styled"

const CastItem = ({name, photo}) => {
  const defaultPhoto =
    "https://www.plasticheal.dk/images/slider-placeholder380X412.png"

  const handleImageError = event => {
    event.target.src = defaultPhoto
  }

  return (
    <CastListItem>
      <Image
        src={`https://image.tmdb.org/t/p/w500${photo}`}
        alt={name}
        width="100"
        height="140"
        loading="lazy"
        onError={handleImageError}
      />
      <Text>
        {name}
      </Text>
    </CastListItem>
  )
}

export default CastItem
