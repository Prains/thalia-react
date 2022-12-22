import { useState } from 'react';
import '../css/novelties.scss'
import arrow from '../images/arrow.svg'
import { Link } from 'react-router-dom'
const Novelties = () => {
    const novArray = [
        {
            img: require("../images/novelties__card1.jpg"),
            title: "Кошелёк",
            text: "Кошелёк из натуральной кожи с ручной обвязкой. Ремешок можно использовать как брелок для ключей",
            price: "2000 р",
        },
        {
            img: require("../images/novelties__card2.jpg"),
            title: "Торба",
            text: "Торба из полиэфирного шнура с кожаными элементами. Клапан с магнитной кнопкой, кожаное дно, наружный карман. Подкладка по желанию",
            price: "4200 р",
        },
    ];
    let [count, setCount] = useState(0)
    function handleCounts(count) {
        let temp = count
        if (temp === novArray.length - 1) {
            temp = 0
            setCount(temp)
        } else {
            temp++
            setCount(temp)
        }
    }
    return (
        <section className="novelties">
            <h2 className="novelties__title title">Новинки</h2>
            <div className="novelties__content">
                <img src={novArray[count].img} alt="" className="novelties__image" />
                <div className="novelties__content__text-wrapper">
                    <h3 className="novelties__content__text-wrapper__title text">{novArray[0].title} </h3>
                    <p className="novelties__content__text-wrapper__text text">{novArray[0].text}  </p>
                    <div className="novelties__content__text-wrapper__bottom">
                        <p
                            className="novelties__content__text-wrapper__bottom__text text"
                        > {novArray[0].price}</p>
                        <p
                            className="catal__center__text novelties__content__text-wrapper__bottom__link text pointer"
                            onClick={() => {
                                handleCounts(count)
                            }}
                        >
                            Следующее<img
                                src={arrow}
                                alt="arrowimg"
                                className=""
                            />
                        </p>
                    </div>
                    <Link
                        to="/catalog"
                        className="mainbutton text pointer novelties__content__text-wrapper__button"
                    >
                        Перейти в каталог<img src={arrow} alt="arrowimg" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Novelties;