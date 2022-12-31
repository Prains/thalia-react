import './catal.scss'
import rope2 from '../../../images/rope2.png'
import arrow from '../../../images/arrow.svg'
import { Link } from 'react-router-dom'


const Catal = (props) => {

    const novelties = props.novelties

    return (
        <section className="catal">
            <img src={rope2} alt="ropeimg" className="rope2" />
            <h2 className="catal__title title">Каталог</h2>
            <div className="catal__frow">
                <div className="catal_el">
                    <img src={novelties[0].acf.gallery} alt="cardimg" className="cardimg" />
                    <p className="el__title text">{novelties[0].title.rendered}</p>
                    <p className="el__text text">{novelties[0].acf.price} Р</p>
                </div>
                <div className="catal_el">
                    <img src={novelties[1].acf.gallery} alt="cardimg" className="cardimg" />
                    <p className="el__title text">{novelties[1].title.rendered}</p>
                    <p className="el__text text">{novelties[1].acf.price} Р</p>
                </div>
                <p className="catal__text text">
                    Вещи ручной работы дополняют повседневные образы и делают их
                    уникальными, а ваш дом - неповторимым.
                </p>
            </div>
            <div className="catal__center">
                <p className="catal__center__title title">Сумки, аксесуары и декор</p>
                <Link
                    to="/catalog"
                    className="catal__center__text text pointer"
                >
                    Перейти в каталог<img
                        src={arrow}
                        alt="arrowimg"
                        className=""
                    />
                </Link>
            </div>
            <div className="catal__trow">
                <p className="catal__trow__text text">
                    Каждая вещь содержит в себе только лучшие материалы и частичку души
                </p>
                <div className="catal_el zero">
                    <img src={novelties[2].acf.gallery} alt="cardimg" className="cardimg" />
                    <p className="el__title text">{novelties[2].title.rendered}</p>
                    <p className="el__text text">{novelties[2].acf.price} Р</p>
                </div>
                <div className="catal_el">
                    <img src={novelties[3].acf.gallery} alt="cardimg" className="cardimg" />
                    <p className="el__title text"> {novelties[3].title.rendered} </p>
                    <p className="el__text text"> {novelties[3].acf.price}  Р</p>
                </div>
            </div>
        </section>
    );
}

export default Catal;