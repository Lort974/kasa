import { NavLink, useLocation } from "react-router-dom"
import Banner from '../components/Banner'

const Home = () => {
    const location = useLocation()

    return <>
        <div>A propos...</div>
        <Banner location={location.pathname} />
    </>
}

export default Home