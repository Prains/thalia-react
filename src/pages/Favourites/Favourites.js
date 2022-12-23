import { basket, trash } from '../../components/Icons/Icons'
import './favourite.scss'
import { useState } from 'react'
const Favourites = (props) => {
    let temp = props.temp
    let [founded, setFound] = useState(temp.filter(item =>
        localStorage.getItem('liked').indexOf(item.product_code) !== -1
    ))
    function deleteHandler(code) {
        localStorage.setItem("liked", localStorage.getItem("liked").replace(code, ""))
        setFound(founded.filter(item =>
            localStorage.getItem('liked').indexOf(item.product_code) !== -1
        ))
    }

    return (
        <section className="favourite">
            <h2 className="favourite__title title">Избранное</h2>
            <div className="favourite__items">
                {founded && founded.map((item) => {
                    return <div className="catalog-page__items__item pointer" key={item.id}>
                        <img
                            src={item.yoast_head_json.og_image[0].url}
                            alt={item.title.rendered}
                            className="catalog-page__items__item__img"
                        />
                        <p className="catalog-page__items__item__text text">{item.title.rendered}</p>
                        <div className="catalog-page__items__item__wrapper">
                            <img
                                src={trash}
                                alt=""
                                className="catalog-page__items__item__wrapper__like pointer"
                                onClick={() => {
                                    deleteHandler(item.product_code)
                                }}
                            />
                            <p className="catalog-page__items__item__wrapper__price text">{item.price} Р</p>
                            <img
                                src={basket}
                                alt=""
                                className="catalog-page__items__item__wrapper__basket pointer"
                            />
                        </div>
                    </div>
                })}
                {founded.length === 0 && <p className='favourite__nothing'>Пока ничего нет. Добавим пару сумочек?</p>}
            </div>
        </section >
    );
}

export default Favourites;