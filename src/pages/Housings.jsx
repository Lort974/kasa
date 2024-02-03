import { useParams } from "react-router-dom"
import housings from "../datas/logements.json"
import Collapse from "../components/Collapse"
import Carousel from "../components/Carousel"
import starActive from "../assets/images/star-active.svg"
import starInactive from "../assets/images/star-inactive.svg"
import PageError from "../pages/PageError"

const Housings = () => {

    const { id } = useParams()

    //vérifier sur l'id fourni dans l'url correspond à l'id d'un logement existant
    const currentHousing = housings.filter(housing => (housing.id === id))

    //si aucune correspondance, retourner une erreur
    if (currentHousing.length === 0) {
        return <PageError />
    }

    //définir un tableau pour le collapse de la description et des équipements
    const housingDescription = [
        {
            "title": "Description",
            "description": currentHousing[0].description
        },
        {
            "title": "Equipments",
            "description": currentHousing[0].equipments.map(equipment => (
                <div key={equipment} className="housing__details__description__equipment">{equipment}</div>
            ))
        }
    ]

    //définir une variable pour les tags
    const housingTags = currentHousing[0].tags.map(tag => (
        <div key={tag} className="housing__details__header__left__tags__elt">
            {tag}
        </div>
    ))

    //définir la note en étoiles
    let rating = []
    for(let i=0;i<currentHousing[0].rating;i++) {
        rating.push(<img key={"active"+i} src={starActive} alt="Etoile active" />)
    }
    for(let i=0;i<5-currentHousing[0].rating;i++) {
        rating.push(<img key={"inactive"+i} src={starInactive} alt="Etoile inactive" />)
    }

    return <section className="housing">
        <div className="housing__carousel">
            <Carousel />
        </div>
        <div className="housing__details">
            <div className="housing__details__header">
                <div className="housing__details__header__left">
                    <h1 className="housing__details__header__left__title">
                        {currentHousing[0].title}
                    </h1>
                    <div className="housing__details__header__left__location">
                        {currentHousing[0].location}
                    </div>
                    <div className="housing__details__header__left__tags">
                        {housingTags}
                    </div>
                </div>
                <div className="housing__details__header__right">
                    <div className="housing__details__header__right__host">
                        <div className="housing__details__header__right__host__name">
                            {currentHousing[0].host.name.split(' ')[0]}
                            <br/>
                            {currentHousing[0].host.name.split(' ')[1]}
                        </div>
                        <img className="housing__details__header__right__host__picture" src={currentHousing[0].host.picture} alt="Photo de l'hôte" />
                    </div>
                    <div className="housing__details__header__right__rating">
                        {rating}
                    </div>
                </div>
            </div>
            <div className="housing__details__description">
                <Collapse datas={housingDescription} type="--housingDetails" />
            </div>
        </div>
    </section>
}

export default Housings