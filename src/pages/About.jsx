import { NavLink, useLocation } from "react-router-dom"
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

const Home = () => {
    const location = useLocation()

    return <>
        <Banner location={location.pathname} />
        <Collapse />
    </>
}

export default Home