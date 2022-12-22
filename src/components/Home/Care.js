import '../../css/care.scss'
import arrow from '../../images/arrow.svg'
import jute1 from '../../images/materials__jute1.png'
import rafia from '../../images/materials__rafia.png'
import { useState } from 'react'
import Popup from '../Popup'
import { Link } from 'react-router-dom'
const Care = () => {

    let title = 'Заголовок'
    let text = 'Текст'
    let [popupShown, setPopupShown] = useState(false);

    return (
        <section className="care">
            <h2 className="care__title title">Уход за вещами</h2>
            <div className="care__elements">
                <div className="care__element">
                    <img src={jute1} alt="" className="care__img" />
                    <div className="care__wrapper care__paddng2">
                        <p className="care__text title care__firstmargin">
                            Уход за вещами из джута
                        </p>
                        <p className="catal__center__text text care__jute__link" onClick={() => { setPopupShown(!popupShown) }}>
                            <img
                                src={arrow}
                                alt="arrowimg"
                                className="rotate arrowimg"
                            />Узнать больше
                        </p>
                    </div>
                </div>
                <div className="care__element">
                    <div className="care__wrapper care__padding">
                        <p className="care__text care__margin title">
                            Уход за вещами из рафии
                        </p>
                        <p className="catal__center__text text care__rafia__link" onClick={() => { setPopupShown(!popupShown) }}>
                            Узнать больше<img
                                src={arrow}
                                alt="arrowimg"
                                className="arrowimg"
                            />
                        </p>
                    </div>
                    <img src={rafia} alt="" className="care__img" />
                </div>
            </div>
            <Link
                to="/catalog"
                className="mainbutton text pointer care__button"
            >
                Перейти в каталог<img src={arrow} alt="arrowimg" />
            </Link>
            {popupShown && <Popup popupShown={popupShown} setShown={setPopupShown} title={title} text={text} />}
        </section>
    );
}

export default Care;