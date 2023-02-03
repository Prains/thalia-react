import './care.scss'
import jute1 from '../../../images/materials__jute1.png'
import rafia from '../../../images/materials__rafia.png'
import { useState } from 'react'
import Popup from '../../Popup/Popup'
import { Link } from 'react-router-dom'
import { arrow } from '../../Icons/Icons'

const Care = () => {

    let [contentTitle, setContentTitle] = useState('')
    let [contentText, setContentText] = useState('')
    const juteText = '- сухая чистка (щетка, пылесос, липкий ролик) - мыльный раствор - деликатная стирка в стиральной машине(макс. 30°), если нет кожаной фурнитуры - не использовать сильный отжим  - естественная сушка на горизонтальной поверхности - отпаривание'
    const juteTitle = 'Уход за вещами из джута'
    const rafiaTitle = 'Уход за вещами из рафии'
    const rafiaText = '- удаление локальных загрязнений мыльным раствором - деликатная ручная стирка (макс. 30°) - сильно не отжимать, не выкручивать - естественная сушка на горизонтальной поверхности - отпаривание';
    let [popupShown, setPopupShown] = useState(false);

    function setOverlayContent(title, text) {
        setContentText(text);
        setContentTitle(title);
        setPopupShown(!popupShown)
    }

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
                            setOverlayContent(juteTitle, juteText)
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
                            setOverlayContent(rafiaTitle, rafiaText)
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
            {popupShown && <Popup popupShown={popupShown} setShown={setPopupShown} title={contentTitle} text={contentText} />}
        </section>
    );
}

export default Care;