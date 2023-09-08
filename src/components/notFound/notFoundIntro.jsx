import React from "react"
import { Link } from "react-router-dom"
import { ErrorWrap, ErrorText, Button } from "./notFound.styled"

const NotFoundIntro = () => {
  return (
    <ErrorWrap>
      <ErrorText>Sorry, page not found </ErrorText>
      <Button type="button">
        <Link to="/">Back Home</Link>
      </Button>
    </ErrorWrap>
  )
}

export default NotFoundIntro