import { lazy } from "react"
import {Routes, Route} from "react-router-dom"

const SharedLayout = lazy(() => import("./sharedLayoutComponent/sharedLayout"));
const Home = lazy(() => import("../pages/homePage"));
const Movies = lazy(() => import("../pages/moviesPage"));
const MovieDetails = lazy(() => import("../pages/movieDetailsPage")) 
const Cast = lazy(() => import("components/cast/cast"))
const Reviews = lazy(() => import("components/reviews/reviews"))
const NotFound = lazy(() => import("pages/notFoundPage"))

export const App = () => {
  return <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
}

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
