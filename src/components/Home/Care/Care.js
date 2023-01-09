import './care.scss'
import jute1 from '../../../images/materials__jute1.png'
import rafia from '../../../images/materials__rafia.png'
import { useState } from 'react'
import Popup from '../../Popup/Popup'
import { Link } from 'react-router-dom'
import { arrow } from '../../Icons/Icons'

const Care = () => {

    let title = ''
    let text = ''
    const juteText = ''
    const juteTitle = 'Уход за вещами из джута'
    const rafiaTitle = 'Уход за вещами из рафии'
    const rafiaText = '';
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
                        <p className="catal__center__text text care__jute__link" onClick={() => {
                            title = juteTitle;
                            text = juteText;
                            setPopupShown(!popupShown)
                        }}>
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
                        <p className="catal__center__text text care__rafia__link" onClick={() => {
                            title = rafiaTitle;
                            text = rafiaText;
                            setPopupShown(!popupShown);
                        }}>
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