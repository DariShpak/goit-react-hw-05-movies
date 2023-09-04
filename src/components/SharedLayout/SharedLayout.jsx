import {Outlet} from "react-router-dom"
import HeaderBar from "components/header/header"
import Footer from "components/footer/footer"
import BtnScrollUp from "components/scrollUpButton/scrollUpButton"
import {Main, Container} from "components/sharedLayout/sharedLayout.styled"

const SharedLayout = () => {
  return (
    <Container>
      <HeaderBar />
      <Main>
        <BtnScrollUp />
        <Outlet />
      </Main>
      <Footer />
    </Container>
  )
}

export default SharedLayout
