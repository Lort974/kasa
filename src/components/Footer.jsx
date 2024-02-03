import logoWhite from "../assets/images/LOGO_white.svg"

const Footer = () => {
    return <>
        <footer className="footer">
            <img className="footer__logo" src={logoWhite} alt="Logo blanc" />
            <div className="footer__copyright">
                © 2020 Kasa. All rights reserved
            </div>
        </footer>
    </>
}

export default Footer