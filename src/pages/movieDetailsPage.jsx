import {Link, Outlet} from "react-router-dom"
import MovieDetailsItem from "components/movieDetailsItem/movieDetailsItem"
import {
  Ul,
  Li,
  StyledLink, Section,
} from "components/movieDetailsItem/movieDetailsItem.styled"

const MovieDetails = () => {
  return <Section>
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


      <Outlet />
    </Section>
}

export default MovieDetails
