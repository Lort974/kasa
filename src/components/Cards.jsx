import { NavLink } from 'react-router-dom'
import housings from '../datas/logements.json'

const Cards = () => {
    const cardsList = housings.map(housing => (
        <article key={housing.id} className="cardList__card">
            <NavLink className="cardList__card__link" to={"housings/"+housing.id}>
                <div className='cardList__card__link__title'>{housing.title}</div>
                <img className='cardList__card__link__img' src={housing.cover} alt="Illustration du logement" />
            </NavLink>
        </article>
    ))


    return <>
        <section className='cardList'>
            {cardsList}
        </section>
    </>
}

export default Cards