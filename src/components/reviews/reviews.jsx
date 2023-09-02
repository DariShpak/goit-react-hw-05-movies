import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ReviewItem from "./reviewItem"
import getMovieReviews from "fetches/fetchReviews"
import {LoaderIcon} from "components/loader/loader"
import {ReviewsSection, ReviewsList} from "./reviews.styled"
import Error from "./reviewError"

const Reviews = () => {
  const {movieId} = useParams()
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(
    () => {
      const fetchAllReviews = async () => {
        try {
          setIsLoading(true)
          const response = await getMovieReviews(movieId)
          const reviewData = response.results

          if (reviewData.length === 0) {
            setError("Oooops, there are no reviews yet")
            setReviews([])
          } else {
            setReviews([...reviewData])
            setError(null)
          }
        } catch (error) {
        } finally {
          setIsLoading(false)
        }
      }
      fetchAllReviews()
    },
    [movieId]
  )

  return (
    <ReviewsSection>
      {isLoading && <LoaderIcon />}
      {error && <Error error={error} />}

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
