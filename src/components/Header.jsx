import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/images/LOGO.svg"

const Header = () => {
    //url relatif actuel
    const location = useLocation()
    //liens de navigation possibles
    const navTable = [['/', 'Accueil'], ['/about', 'A propos']]
    //construire les liens de navigation en leur ajoutant la classe "nav__link--current" si c'est la page actuelle
    const navLinks = navTable.map(elt => (
        <NavLink key={elt[0]} className={`nav__link${location.pathname===elt[0]?" nav__link--current":""}`} to={elt[0]}>{elt[1]}</NavLink>
    ))
    

    return <>
        <header className="header">
            <div className="logo">
                <img className="logo__img" src={logo} alt="Logo Kasa" />
            </div>
            <nav className="nav">
                {navLinks}
            </nav>
        </header>
    </>
}

export default Header