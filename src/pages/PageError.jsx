import { useRouteError, NavLink } from "react-router-dom/dist"

const PageError = () => {
    const error = useRouteError()

    return <>
        <div className="pageError">
            <div className="pageError__title">
                404
            </div>
            <div className="pageError__description">
                "Oups! La page que vous demandez n'existe pas."
            </div>
            <NavLink className="pageError__action" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    </>
}

export default PageError