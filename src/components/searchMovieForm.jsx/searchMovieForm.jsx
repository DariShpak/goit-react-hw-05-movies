import React from "react"
import {Form, Input, Button} from "./searchMovieForm.styled"

const MovieSearchForm = ({onSubmit, onChange}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search a movie"
        onChange={onChange}
      />
      <Button type="submit">GO</Button>
    </Form>
  )
}

export default MovieSearchForm
