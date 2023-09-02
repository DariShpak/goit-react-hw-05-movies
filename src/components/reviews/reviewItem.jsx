import React from "react"
import {ReviewsListItem, Author, Content} from "./reviews.styled"

const ReviewItem = ({ author, content }) => {

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

export default ReviewItem
