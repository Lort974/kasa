import homeBanner from "../assets/images/home_banner.jpg"
import aboutBanner from "../assets/images/about_banner.jpg"

const Banner = ({location}) => {
    let bannerPic = ""
    
    switch(location) {
        case "/" :
            bannerPic = homeBanner
            break;
        case "/about" :
            bannerPic = aboutBanner
            break;
    }

    return <>
        <div className="banner">
            <img className="banner__img" src={bannerPic} alt="Illustration de la bannière" />
        </div>
    </>
}

export default Banner