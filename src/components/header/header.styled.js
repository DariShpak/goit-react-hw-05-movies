import styled from "styled-components"
import {NavLink} from "react-router-dom"

export const Container = styled.div`padding: 20px;`

export const Header = styled.header`
  height: 60px;
  display: flex;
  gap: 100px;
  align-items: center;
`

export const Nav = styled.nav`align-items: center;`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Li = styled.li``

export const NaviLink = styled(NavLink)`
text-decoration: none;
color: #ebecf0;
font-size: 16px;

`
