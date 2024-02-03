import housings from "../datas/logements.json"
import { useParams } from "react-router-dom"
import carouselBackward from "../assets/images/carousel_backward.svg"
import carouselForward from "../assets/images/carousel_forward.svg"

const Carousel = () => {
    const { id } = useParams()

    const carousel = housings.filter(housing => (housing.id === id)).map(housing => (
        housing.pictures.map(picture => (
            <img className="carousel__picture" key={picture} src={picture} alt="Photo du logement" />
        ))
    ))

    return <div className="carousel">
        {carousel}
        <img src={carouselBackward} alt="Précédent" className="carousel__arrow carousel__arrow--backward" />
        <img src={carouselForward} alt="Suivant" className="carousel__arrow carousel__arrow--forward" />
    </div>
}

export default Carousel