import React from "react"
import {ReviewsListItem, Author, Content} from "./reviews.styled"
import PropTypes from "prop-types"

const ReviewItem = ({author, content}) => {
  return (
    <ReviewsListItem>
      <Author>
        {author}
      </Author>
      <Content>
        "{content}"
      </Content>
    </ReviewsListItem>
  )
}
ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  contenet: PropTypes.string.isRequired
}

export default ReviewItem
