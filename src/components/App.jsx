import {lazy} from "react"
import {Routes, Route} from "react-router-dom"

const SharedLayout = lazy(() => import("./sharedLayoutComponent/sharedLayout"))
const Home = lazy(() => import("../pages/homePage"))
const Movies = lazy(() => import("../pages/moviesPage"))
const MovieDetails = lazy(() => import("../pages/movieDetailsPage"))
const Cast = lazy(() => import("components/cast/cast"))
const Reviews = lazy(() => import("components/reviews/reviews"))
const NotFound = lazy(() => import("pages/notFoundPage"))

const App = () => {
  return (
    <Routes>
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
  )
}

export default App