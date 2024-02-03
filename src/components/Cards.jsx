import { NavLink } from 'react-router-dom'
import housings from '../datas/logements.json'

const Cards = () => {
    const cardsList = housings.map(housing => (
        <NavLink className="cardList__card" key={housing.id} to={"housings/"+housing.id}>
            <div className='cardList__card__title'>{housing.title}</div>
            <img className='cardList__card__img' src={housing.cover} alt="Illustration du logement" />
        </NavLink>
    ))


    return <>
        <section className='cardList'>
            {cardsList}
        </section>
    </>
}

export default Cards