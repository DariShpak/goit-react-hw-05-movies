import { useRef } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import {Suspense} from "react"
import MovieDetailsItem from "components/movieDetailsItem/movieDetailsItem"
import {LoaderIcon} from "components/loader/loader"
import {
  Ul,
  Li,
  StyledLink,
  Section,
  Button
} from "components/movieDetailsItem/movieDetailsItem.styled"

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies")


  return (
    <Section>
      <Button>
        <Link to={ backLinkLocationRef.current }>Go Back</Link>
      </Button>

      <MovieDetailsItem />

      <Ul>
        <Li>
          <Link to="cast">
            <StyledLink>Cast</StyledLink>
          </Link>
        </Li>
        <Li>
          <Link to="reviews">
            <StyledLink>Reviews</StyledLink>
          </Link>
        </Li>
      </Ul>

      <Suspense fallback={<LoaderIcon />}>
        <Outlet />
      </Suspense>
    </Section>
  )
}

export default MovieDetails
