import React from "react"
import {Routes, Route} from "react-router-dom"

import Movies from "./pages/moviesPage"
import MovieDetails from "./pages/movieDetailsPage"
import Cast from "components/cast/cast"
import Reviews from "components/reviews/reviews"
import SharedLayout from "components/sharedLayout/sharedLayout"
import Home from "./pages/homePage"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
