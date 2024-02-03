import { useLocation } from "react-router-dom"
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutDatas from "../datas/about.json"

const Home = () => {
    const location = useLocation()

    return <>
        <Banner location={location.pathname} />
        <section>
            <Collapse datas={aboutDatas} type="--about" />
        </section>
    </>
}

export default Home