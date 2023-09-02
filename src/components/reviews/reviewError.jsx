import React from "react"
import {ErrorWrap, ErrorText} from "./reviews.styled"
const Error = ({error}) => {
  return <ErrorWrap>
      <ErrorText>
        {error}
      </ErrorText>
    </ErrorWrap>
}

export default Error
