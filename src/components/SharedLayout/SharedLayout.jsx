
import { Outlet } from "react-router-dom";
import HeaderBar from "components/header/header";
import Footer from "components/footer/footer"

const SharedLayout = () => {
  return <>
    <HeaderBar />
    <main>
      <Outlet />
    </main>
       <Footer/>
  </>
}

export default SharedLayout