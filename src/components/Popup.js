import arrow from '../images/arrow.svg'
import '../css/overlay.scss'

const Popup = (props) => {
    return (
        <div className="overlay">
            <div className="overlay__block">
                <div className="overlay__block__text">
                    <h2 className="overlay__block__text__title title">
                        {props.title}
                    </h2>
                    <p className="overlay__block__text__text text">
                        {props.text}
                    </p>
                </div>
                <p className="catal__center__text text pointer overlay__block__link" onClick={() => { props.setShown(!props.popupShown) }}>
                    <img src={arrow} alt="arrowimg" className="" />
                    Скрыть
                </p>
            </div>
        </div>
    );
}

export default Popup;