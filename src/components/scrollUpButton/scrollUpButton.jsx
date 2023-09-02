import {useState, useEffect} from "react"
import {BtnUp} from "./scrollUp.styled"
import {ReactComponent as UpIcon} from "icons/up-svgrepo-com.svg"

function BtnScrollUp() {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handlerScrollUp = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  return (
    showButton &&
    <BtnUp type="button" onClick={handlerScrollUp}>
      <UpIcon width="20px" height="20px" />
    </BtnUp>
  )
}

export default BtnScrollUp
