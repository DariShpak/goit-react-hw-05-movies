import {useState, useEffect} from "react"
import getCast from "fetches/fetchCast"
import {useParams} from "react-router-dom"
import CastItem from "./castItem"
import {LoaderIcon} from "components/loader/loader"
import {CastWrapper, CastList} from "./cast.styled"
import ErrorSection from "components/error/error"

const Cast = () => {
  const {movieId} = useParams()
  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(
    () => {
      const fetchAllCast = async () => {
        try {
          setIsLoading(true)
          const castData = await getCast(movieId)
          const newCast = castData.data.cast

          setCast([...newCast])
          setError(null)
        } catch (error) {
          setError(error)
        } finally {
          setIsLoading(false)
        }
      }
      fetchAllCast()
    },
    [movieId]
  )

  return (
    <CastWrapper>
      {isLoading && <LoaderIcon />}
      {error && <ErrorSection error={error} />}
      <CastList>
        {cast &&
          cast.map(({id, name, profile_path}) =>
            <CastItem key={id} name={name} photo={profile_path} />
          )}
      </CastList>
    </CastWrapper>
  )
}

export default Cast
