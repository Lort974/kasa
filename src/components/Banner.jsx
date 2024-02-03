import homeBanner from "../assets/images/home_banner.jpg"
import aboutBanner from "../assets/images/about_banner.jpg"

const Banner = ({location}) => {
    let bannerPic = ""
    let bannerTitle = ""
    
    switch(location) {
        case "/" :
            bannerPic = homeBanner
            bannerTitle = "Chez vous, partout et ailleurs" 
            break;
        case "/about" :
            bannerPic = aboutBanner
            bannerTitle = "" 
            break;
    }

    return <>
        <div className="banner">
            <div className="banner__title">
                {bannerTitle}
            </div>
            <img className="banner__img" src={bannerPic} alt="Illustration de la bannière" />
        </div>
    </>
}

export default Banner