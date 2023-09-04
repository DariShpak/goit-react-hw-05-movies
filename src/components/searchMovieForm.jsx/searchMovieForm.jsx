import React from "react"
import { useSearchParams } from "react-router-dom"
import {Form, Input, Button} from "./searchMovieForm.styled"

const MovieSearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') ?? "";

  const updateQueryString = event => {
    if (event.target.value === "") {
     return setSearchParams({})
    } 
      setSearchParams({query: event.target.value})  
  }

  return (
    <Form onSubmit={ onSubmit}>
      <Input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search a movie"
        value={query }
        onChange={updateQueryString}
      />
      <Button type="submit">GO</Button>
    </Form>
  )
}

export default MovieSearchForm
