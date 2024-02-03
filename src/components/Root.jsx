import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Root = () => {
    return <>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default Root