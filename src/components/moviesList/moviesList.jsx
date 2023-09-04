import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useSearchParams} from "react-router-dom";
import MovieSearchForm from "components/searchMovieForm.jsx/searchMovieForm";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderIcon } from "components/loader/loader";
import { Section, Ul, Wrapper } from "./moviesList.styled";
import ErrorSection from "components/error/error";
import MoviesListItem from "components/moviesListItem/moviesListItem";
import getMovieByName  from "utils/fetches/fetchMovieByName"; 

const MoviesList = () => {

  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') ?? "";

  const location = useLocation();

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearch(true);
  };

  const fetchMovies = useMemo(
    () => async function () {
      try {
        setIsLoading(true);
        const response = await getMovieByName(query, page); 
        const newMovies = response.results;

        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setPage((prevPage) => prevPage + 1);
        setSearch(false);
        setError(null);

        if (page === 100) {
          setHasMore(false);
        }
      } catch (error) {
        setError(error);
        setSearch(false);
      } finally {
        setIsLoading(false);
      }
    },
    [query, page]
  );

  const loadMoreMovies = () => {
    if (!search) {
      fetchMovies();
    }
  };

  useEffect(() => {
    if (search) {
      fetchMovies();
    }
  }, [fetchMovies, search]);

  return (
 <>
      <MovieSearchForm onSubmit={handleSearchSubmit} />
      {error && <ErrorSection error={error} />}
      
      <Section>
        {movies.length > 0 && ( 
          <InfiniteScroll
            dataLength={movies.length}
            next={loadMoreMovies}
            style={{ overflow: "hidden" }}
            hasMore={hasMore}
            loader={isLoading && <LoaderIcon />}
          >
            <Wrapper>
              <Ul>
                {movies.map(({ id, title, poster_path }) => (
                  <Link key={id} to={`${id}`} state={{from: location } }>
                    <MoviesListItem title={title} poster={poster_path} />
                  </Link>
                ))}
              </Ul>
            </Wrapper>
          </InfiniteScroll>
        )}
      </Section>
    </>
  );
};


export default MoviesList;
