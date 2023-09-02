import {RotatingLines} from "react-loader-spinner"
import {LoaderOverlay} from "./loader.styled"
export const LoaderIcon = () => {
  return (
    <LoaderOverlay>
      <RotatingLines
        strokeColor="#ffffff"
        strokeWidth="5"
        animationDuration="0.75"
        width="76"
        visible={true}
      />
    </LoaderOverlay>
  )
}
