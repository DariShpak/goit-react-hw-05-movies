import {useState, useEffect} from "react"
import getTrendingMovies from "fetches/fetchTrendings"
import { LoaderIcon } from "components/loader/loader"
 import HomeIntro from "components/home/homeComponent"

const Home = () => {
  const [trendings, setTrendings] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchTrendings()
  }, [])

  const fetchTrendings = async () => {
    try {
      setIsLoading(true)
      const response = await getTrendingMovies()
      const newTrendings = response.data.results
      setTrendings([...newTrendings])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      {isLoading && <LoaderIcon />}
      <HomeIntro trendings={trendings} />
    </>
  )
}

export default Home
