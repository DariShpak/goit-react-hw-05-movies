
import { Outlet } from "react-router-dom";
import HeaderBar from "components/header/header";


const SharedLayout = () => {
  return <>
    <HeaderBar/>
    <Outlet/>
  </>
}

export default SharedLayout