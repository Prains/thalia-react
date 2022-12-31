import { useState } from 'react';
import './novelties.scss'
import arrow from '../../images/arrow.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Novelties = (props) => {
    const novelties = props.novelties
    let [count, setCount] = useState(0)

    function handleCounts(count) {
        let temp = count
        if (temp === novelties.length - 1) {
            temp = 0
            setCount(temp)
        } else {
            temp++
            setCount(temp)
        }
    }

    return (
        <motion.section className="novelties" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="novelties__title title">Новинки</h2>
            <div className="novelties__content">
                <img src={novelties[count].acf.gallery} alt="" className="novelties__image" />
                <div className="novelties__content__text-wrapper">
                    <h3 className="novelties__content__text-wrapper__title text">{novelties[count].title.rendered} </h3>
                    <p className="novelties__content__text-wrapper__text text">{novelties[count].acf.desc}</p>
                    <div className="novelties__content__text-wrapper__bottom">
                        <p
                            className="novelties__content__text-wrapper__bottom__text text"
                        > {novelties[count].acf.price} Р</p>
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
        </motion.section>
    );
}

export default Novelties;