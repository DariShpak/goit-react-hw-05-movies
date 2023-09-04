import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ReviewItem from "./reviewItem"
import getMovieReviews from "utils/fetches/fetchReviews"
import {LoaderIcon} from "components/loader/loader"
import {ReviewsSection, ReviewsList} from "./reviews.styled"
import ErrorSection from "components/error/error"
import InfiniteScroll from "react-infinite-scroll-component"

const Reviews = () => {
  const {movieId} = useParams()
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(
    () => {
      const fetchAllReviews = async () => {
        try {
          setIsLoading(true)
          const response = await getMovieReviews(movieId, page)
          const reviewData = response.results

          if (reviewData.length === 0) {
            setError("Oooops, there are no reviews yet")
            setReviews([])
          } else {
            setReviews(prevReviews => [...prevReviews, ...reviewData])
            setError(null)
          }
        } catch (error) {
          setError(error)
        } finally {
          setHasMore(false)
          setIsLoading(false)
        }
      }
      fetchAllReviews()
    },
    [movieId, page]
  )

  const loadMoreReviews = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <ReviewsSection>
      {isLoading && <LoaderIcon />}
      {error && <ErrorSection error={error} />}

      <InfiniteScroll
        dataLength={reviews.length}
        next={loadMoreReviews}
        style={{overflow: "hidden"}}
        hasMore={hasMore}
        loader={isLoading && <LoaderIcon />}
      />

      <ReviewsList>
        {reviews.length > 0
          ? reviews.map(({id, author, content}) =>
              <ReviewItem key={id} author={author} content={content} />
            )
          : null}
      </ReviewsList>
    </ReviewsSection>
  )
}

export default Reviews
