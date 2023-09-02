import {useState, useEffect} from "react"
import getCast from "fetches/fetchCast"
import {useParams} from "react-router-dom"
import CastItem from "./castItem"
import { LoaderIcon } from "components/loader/loader"
import { CastWrapper, CastList} from "./cast.styled"

const Cast = () => {
  const {movieId} = useParams()
  const [cast, setCast] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(
    () => {
      const fetchAllCast = async () => {
        try {
          setIsLoading(true)
          const castData = await getCast(movieId)
          const newCast = castData.data.cast

          setCast([...newCast])
        } catch (error) {
          console.log(error)
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
