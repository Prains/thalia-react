import { arrow, trash } from '../../components/Icons/Icons'

import { useState } from 'react'

import { removeItemOnLocal, makeNewCartArray } from '../../utils/cartFunctions'

import Form from './Form/Form'

import { motion } from 'framer-motion'

const Order = (props) => {

    let temp = props.temp

    let [orderButtonIsClicked, setOrderButtonClicked] = useState(false);

    let [founded, setFound] = useState(temp.filter(item =>
        localStorage.getItem('ordered').indexOf(item.acf.code) !== -1
    ))

    function handleCartItemDelete(code, setRender, state, array) {
        removeItemOnLocal(code, setRender, state)
        setRender(makeNewCartArray(array, state, code))
    }

    return (
        <motion.section className="favourite" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="favourite__title title">Корзина</h2>
            <div className="favourite__items">
                {founded.length > 0 && founded.map((item) => {
                    return <div className="catalog-page__items__item pointer" key={item.id}>
                        <img
                            src={item.acf.gallery}
                            alt={item.title.rendered}
                            className="catalog-page__items__item__img"
                        />
                        <p className="catalog-page__items__item__text text">{item.title.rendered}</p>
                        <div className="catalog-page__items__item__wrapper">
                            <p className="catalog-page__items__item__wrapper__price text">{item.acf.price} Р</p>
                        </div>
                        <div className="catalog-page__items__item__bottom">
                            <img
                                src={trash}
                                alt=""
                                className="catalog-page__items__item__wrapper__like pointer"
                                onClick={() => {
                                    handleCartItemDelete(item.acf.code, setFound, 'ordered', founded);
                                }}
                            />
                        </div>
                    </div>
                })}
            </div>
            {founded.length > 0 && <p className="favourite__button text" onClick={() => setOrderButtonClicked(!orderButtonIsClicked)}>Оформить заказ<img
                src={arrow}
                alt="arrowimg"
                className=""
            /></p>}
            {founded.length === 0 && <p className='favourite__nothing'>Пока тут ничего.. Давайте что-нибудь закажем?</p>}
            {orderButtonIsClicked && <Form title={'Оформление заказа'} setShown={setOrderButtonClicked} temp={temp} popupShown={orderButtonIsClicked} />}
        </motion.section>
    );
}

export default Order;