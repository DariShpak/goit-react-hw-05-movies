import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useSearchParams} from "react-router-dom";
import MovieSearchForm from "components/searchMovieForm.jsx/searchMovieForm";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderIcon } from "components/loader/loader";
import { Section, Ul, Wrapper } from "../utils/common.styled";
import ErrorSection from "components/error/error";
import MoviesListItem from "components/moviesListItem/moviesListItem";
import getMovieByName  from "utils/fetches/fetchMovieByName"; 

const Movies = () => {

  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') ?? "";

  const location = useLocation();

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(false);


    const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(true);
    setPage(1);
  };


  const fetchMovies = useMemo(
    () => async function () {
          if (query === "") {
      return;
    }
      try {
        setIsLoading(true);
        const response = await getMovieByName(query, page); 
        const newMovies = response.results;
       setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setPage((prevPage) => prevPage + 1);
        setSearch(false);
        setError(null);
          

        if (page === 40) {
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
      fetchMovies()
   }
    }

 useEffect(() => {
     if (search) {
      fetchMovies();
    }
  }, [fetchMovies, search]);

  return (
 <>
      <Section>
        <MovieSearchForm onSubmit={ handleSubmit} />
        
        {isLoading && <LoaderIcon />}
        
      {error && <ErrorSection error={error} />}

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
                  <Link key={id}  to={`${id}`} state={{from: location }}>
                    <MoviesListItem  title={title} poster={poster_path} />
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


export default Movies;
