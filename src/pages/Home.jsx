import { NavLink, useLocation } from "react-router-dom"
import housings from '../datas/logements.json'
import Banner from '../components/Banner'

const Home = () => {
    const location = useLocation()

    return <>
        <div>Page d'accueil</div>
        <Banner location={location.pathname} />
        {
            housings.map(housing => (
                <NavLink key={housing.id} to={"housings/"+housing.id}>{housing.title}</NavLink>
            ))
        }
    </>
}

export default Home