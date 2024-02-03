import { useRouteError, NavLink } from "react-router-dom/dist"
import Footer from "../components/Footer"
import Header from "../components/Header"

const PageError = () => {
    const error = useRouteError()

    const errorDescription = error.status === 404 ? "Oups! La page que vous demandez n'existe pas." : error.data

    return <>
        <Header />
        <div className="pageError">
            <div className="pageError__title">
                {error.status}
            </div>
            <div className="pageError__description">
                {errorDescription}
            </div>
            <NavLink className="pageError__action" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
        <Footer />
    </>
}

export default PageError