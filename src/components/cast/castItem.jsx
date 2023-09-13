import React from "react"
import { CastListItem, Image, Text } from "./cast.styled"
import { IMG_PATH } from "utils/IMG_PATH"
import PropTypes from "prop-types"

const CastItem = ({name, photo}) => {
  const defaultPhoto =
    "https://www.plasticheal.dk/images/slider-placeholder380X412.png"

  const handleImageError = event => {
    event.target.src = defaultPhoto
  }

  return (
    <CastListItem>
      <Image
        src={`${IMG_PATH}${photo}`}
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


CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}
export default CastItem
