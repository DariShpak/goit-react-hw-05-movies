import React from "react"
import {useSearchParams} from "react-router-dom"
import {Form, Input, Button} from "./searchMovieForm.styled"

const MovieSearchForm = ({onSubmit}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') ?? "";

  const handleQueryChange = event => {
    const searchName = event.target.value
    if ( searchName === "") {
     return setSearchParams({})
    } 
    setSearchParams({ query: searchName})  
   
  }

  return (
    <Form onSubmit={ onSubmit}>
      <Input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search a movie"
        value={query}
        onChange={handleQueryChange}
      />
      <Button type="submit">GO</Button>
    </Form>
  )
}

export default MovieSearchForm
