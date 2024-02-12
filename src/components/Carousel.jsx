import housings from "../datas/logements.json"
import { useActionData, useParams } from "react-router-dom"
import { useState } from "react"
import carouselBackward from "../assets/images/carousel_backward.svg"
import carouselForward from "../assets/images/carousel_forward.svg"

const Carousel = ({id}) => {
    const [currentPicNbr, setCurrentPicNbr] = useState(1)

    const currentHousingPictures = housings.filter(housing => (housing.id === id))[0].pictures

    const carousel = <img className="carousel__picture" src={currentHousingPictures[currentPicNbr-1]} alt="Photo du logement" />

    const picNbr = currentHousingPictures.length

    const carouselScroll = (direction) => {
        if (currentPicNbr === picNbr && direction === 1) {
            setCurrentPicNbr(1)
        }
        else if (currentPicNbr === 1 && direction === -1) {
            setCurrentPicNbr(picNbr)
        }
        else {
            setCurrentPicNbr(currentPicNbr + direction)
        }
    }

    const carouselActions = picNbr > 1 ? 
        <>
            <img onClick={() => carouselScroll(-1)} src={carouselBackward} alt="Précédent" className="carousel__arrow carousel__arrow--backward" />
            <img onClick={() => carouselScroll(1)} src={carouselForward} alt="Suivant" className="carousel__arrow carousel__arrow--forward" />
            <div className="carousel__dial">
                {currentPicNbr}/{picNbr}
            </div>
        </>
        :
        null

    return <div className="carousel">
        {carousel}
        {carouselActions}
    </div>
}

export default Carousel