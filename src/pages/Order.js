
import down from '../images/down.svg'
import add from '../images/add.svg'
import { arrow, trash } from '../components/Icons/Icons'
import { useState } from 'react'

const Order = (props) => {
    let temp = props.temp
    let [founded, setFound] = useState(temp.filter(item =>
        localStorage.getItem('ordered').indexOf(item.product_code) !== -1
    ))
    function deleteHandler(code) {
        localStorage.setItem("ordered", localStorage.getItem("ordered").replace(code, ""))
        setFound(founded.filter(item =>
            localStorage.getItem('ordered').indexOf(item.product_code) !== -1
        ))
    }

    return (
        <section className="favourite">
            <h2 className="favourite__title title">Корзина</h2>
            <div className="favourite__items">
                {founded.length > 0 && founded.map((item) => {
                    return <div className="catalog-page__items__item pointer">
                        <img
                            src={item.yoast_head_json.og_image[0].url}
                            alt={item.title.rendered}
                            className="catalog-page__items__item__img"
                        />
                        <p className="catalog-page__items__item__text text">{item.title.rendered}</p>
                        <div className="catalog-page__items__item__wrapper">
                            <p className="catalog-page__items__item__wrapper__price text">{item.price} Р</p>
                        </div>
                        <div className="catalog-page__items__item__bottom">
                            <img
                                src={trash}
                                alt=""
                                className="catalog-page__items__item__wrapper__like pointer"
                                onClick={() => {
                                    deleteHandler(item.product_code)
                                }}
                            />
                        </div>
                    </div>
                })}
            </div>
            {founded.length > 0 && <a href="/" className="favourite__button text">Оформить заказ<img
                src={arrow}
                alt="arrowimg"
                className=""
            /></a>}
            {founded.length === 0 && <p className='favourite__nothing'>Пока тут ничего.. Давайте что-нибудь закажем?</p>}
        </section>
    );
}

export default Order;