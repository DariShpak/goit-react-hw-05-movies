import {Outlet} from "react-router-dom"
import {Suspense} from "react"
import HeaderBar from "components/header/header"
import Footer from "components/footer/footer"
import BtnScrollUp from "components/scrollUpButton/scrollUpButton"
import {Main, Container} from "./sharedLayout.styled"
import {LoaderIcon} from "components/loader/loader"

const SharedLayout = () => {
  return (
    <Container>
      <HeaderBar />
      <Main>
        <BtnScrollUp />
        <Suspense fallback={<LoaderIcon />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  )
}

export default SharedLayout
