import React from "react"
import {Header, Nav, Ul, Li, NaviLink} from "./header.styled"

const HeaderBar = () => {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <NaviLink to="/">Home</NaviLink>
          </Li>
          <Li>
            <NaviLink to="/movies">Movies</NaviLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
  )
}

export default HeaderBar
