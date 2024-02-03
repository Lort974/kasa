import { useLocation } from "react-router-dom"
import Banner from '../components/Banner'
import Cards from '../components/Cards'

const Home = () => {
    const location = useLocation()

    return <>
        <Banner location={location.pathname} />
        <Cards />
    </>
}

export default Home