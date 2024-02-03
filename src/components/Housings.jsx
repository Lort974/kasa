import { useParams } from "react-router-dom"
import housings from "../datas/logements.json"

const Housings = () => {

    const { id } = useParams()

    //vérifier sur l'id fourni dans l'url correspond à l'id d'un logement existant
    const match = housings.filter(housing => (housing.id === id))

    //si aucune correspondance, retourner une erreur
    if (match.length === 0) {
        return <div>
            <h1>Aucun logement ne correspond à la recherche</h1>
        </div>
    }

    return <div>
        <h1>Nom du logement : { id }</h1>
    </div>
}

export default Housings