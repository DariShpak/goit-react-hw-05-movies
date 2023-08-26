
import { Outlet } from "react-router-dom";
import HeaderBar from "components/header/header";
import Footer from "components/footer/footer"

const SharedLayout = () => {
  return <>
    <HeaderBar/>
    <Outlet />
    <Footer/>
  </>
}

export default SharedLayout