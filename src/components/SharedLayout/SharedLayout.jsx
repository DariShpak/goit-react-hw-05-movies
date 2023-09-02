
import { Outlet } from "react-router-dom";
import HeaderBar from "components/header/header";
import Footer from "components/footer/footer"
import BtnScrollUp from "components/scrollUpButton/scrollUpButton";
import { Main } from "./sharedLayout.styled";

const SharedLayout = () => {
  return <>
    <HeaderBar />
    <Main>
    <BtnScrollUp />
     <Outlet />
    </Main>
    <Footer/>
  </>
}

export default SharedLayout