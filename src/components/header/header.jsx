import React from "react"
import {Container, Header, Nav, Ul, Li, NaviLink} from "./header.styled"

const HeaderBar = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default HeaderBar
