import React from "react"
import {Container, Header, Nav, Ul, Li, NaviLink} from "./header.styled"
import {ReactComponent as LogoIcon} from "icons/cinema-hd-svgrepo-com.svg"


const HeaderBar = () => {
  return <Container>
     <Header>
        <Nav>
          <Ul>
            <Li>
              <NaviLink to="/">Home</NaviLink>
            </Li>
            <Li>
              <NaviLink to="/movies">Movies</NaviLink>
            </Li>
            <NaviLink to="/">
              <LogoIcon width="80" height="60" />
            </NaviLink>
          </Ul>
        </Nav>
      </Header>
    </Container>
 
}

export default HeaderBar
