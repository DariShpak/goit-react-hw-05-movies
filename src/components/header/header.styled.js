import styled from "styled-components"
import {NavLink} from "react-router-dom"

export const Header = styled.header`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #99dddd;
`

export const Nav = styled.nav`align-items: center;`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &: focus,
          &: hover {
    text-shadow: 3px 3px 10px #d7c6cf, -2px 1px 10px #ff99cc;
  }
`

export const NaviLink = styled(NavLink)`
text-decoration: none;
color: var(--text-color);
font-size: 16px;
font-weight: 500;
text-transform: uppercase;

&.active {
text-shadow: 3px 3px 10px #d7c6cf,
    -2px 1px 10px #ff99cc;
         }

`
