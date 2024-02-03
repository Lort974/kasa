import { useState } from "react"
import arrow from "../assets/images/arrow.svg"
import aboutDatas from "../datas/about.json"

const CollapseElement = ({ data }) => {
    const hideDescription = "collapse__element__description collapse__element__description--hidden"
    const showDescription = "collapse__element__description"
    const hideArrow = "collapse__element__title__img collapse__element__title__img--hidden"
    const showArrow = "collapse__element__title__img"
    const [descriptionClass, setDescriptionClass] = useState(hideDescription)
    const [arrowClass, setArrowClass] = useState(hideArrow)

    const slide = () => {
        setDescriptionClass(descriptionClass === hideDescription ? showDescription : hideDescription)
        setArrowClass(arrowClass === hideArrow ? showArrow : hideArrow)
    }

    return (
        <div key={data.title} className="collapse__element">
            <div className="collapse__element__title">
                <div className="collapse__element__title__text">
                    {data.title}
                </div>
                <img onClick={slide} className={arrowClass} src={arrow} alt="Déplier/replier" />
            </div>
            <div className={descriptionClass}>
                {data.description}
            </div>
        </div>
    )
}

const Collapse = () => {
    const about = aboutDatas.map(data => (
        <CollapseElement key={data.title} data={data} />
    ))

    return <section className="collapse">
        {about}
    </section>
}

export default Collapse