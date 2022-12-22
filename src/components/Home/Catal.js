import '../../css/catal.scss'
import rope2 from '../../images/rope2.png'
import rafi from '../../images/rafi.png'
import juta from '../../images/juta.png'
import arrow from '../../images/arrow.svg'
import { Link } from 'react-router-dom'


const Catal = () => {
    return (
        <section className="catal">
            <img src={rope2} alt="ropeimg" className="rope2" />
            <h2 className="catal__title title">Каталог</h2>
            <div className="catal__frow">
                <div className="catal_el">
                    <img src={rafi} alt="cardimg" className="cardimg" />
                    <p className="el__title text">Сумочка из джута</p>
                    <p className="el__text text">8900 Р</p>
                </div>
                <div className="catal_el">
                    <img src={juta} alt="cardimg" className="cardimg" />
                    <p className="el__title text">Сумочка из рафии</p>
                    <p className="el__text text">9300 р</p>
                </div>
                <p className="catal__text text">
                    Изделия ручной работы дополняют повседневные образы и делают их
                    уникальным и неповторимым.
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
                    Каждое изделие содержит в себе только лучшие натуральные материалы и
                    частичку души.
                </p>
                <div className="catal_el zero">
                    <img src={juta} alt="cardimg" className="cardimg" />
                    <p className="el__title text">Сумочка из рафии</p>
                    <p className="el__text text">9300 р</p>
                </div>
                <div className="catal_el">
                    <img src={juta} alt="cardimg" className="cardimg" />
                    <p className="el__title text">Сумочка из рафии</p>
                    <p className="el__text text">9300 р</p>
                </div>
            </div>
        </section>
    );
}

export default Catal;