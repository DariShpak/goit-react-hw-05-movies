import React from "react"
import { ErrorWrap, ErrorText } from "./error.styled"

const ErrorSection = ({error}) => {
  return (
    <ErrorWrap>
      <ErrorText>
        {error}
      </ErrorText>
    </ErrorWrap>
  )
}

export default ErrorSection
