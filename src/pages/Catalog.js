import '../css/catalog-page.scss'
import dropdown from '../images/Polygon.svg'
import close from '../images/mobile__close.svg'
import { useState, useEffect } from 'react'
import search from '../images/search.svg'
import Preloader from '../components/Preloader'
import like from '../images/like.svg'
import basket from '../images/basket.svg'
import { Link } from 'react-router-dom'
const Catalog = (props) => {
    let [isFilterShown, setFilter] = useState(false)
    let [isMobileShown, setMobile] = useState(false)
    let temp = props.temp
    let [liked, setLike] = useState(localStorage.getItem('liked'));

    function likeHandler(code) {
        if (localStorage.getItem('liked') !== null) {
            if (~localStorage.getItem('liked').indexOf(code)) {
                localStorage.setItem("liked", localStorage.getItem("liked").replace(code, ""))
                setLike(localStorage.getItem('liked'))
                return
            }
        }
        localStorage.setItem('liked', localStorage.getItem('liked') + code)
        console.log(localStorage.getItem('liked'))
        setLike(localStorage.getItem('liked'))
    }


    return (
        <>
            {temp == null && <Preloader />}
            {temp && <section className="catalog-page">
                <h2 className="catalog-page__title title">Каталог</h2>
                <div className="catalog-page__filter">
                    <div className="catalog-page__filter__items">
                        <p
                            className="catalog-page__filter__items__text catalog-page__filter__items__all text selected"
                        >
                            Все изделия
                        </p>
                        <p
                            className="catalog-page__filter__items__text catalog-page__filter__items__bags text pointer"
                        >
                            Сумки и аксессуары
                        </p>
                        <p
                            className="catalog-page__filter__items__text catalog-page__filter__items__decor text pointer"
                        >
                            Функциональный декор
                        </p>
                    </div>
                    <div className="catalog-page__filter__search">
                        <input
                            type="text"
                            className="catalog-page__filter__search__input"
                            placeholder="Поиск"
                        />
                        <div className="catalog-page__filter__search__dropdown">
                            <p
                                className="catalog-page__filter__search__dropdown__text text pointer"
                                onClick={() => {
                                    setFilter(!isFilterShown)
                                }}
                            >
                                По возрастанию цены
                                <img
                                    src={dropdown}
                                    alt="rectangle"
                                    className="polygon"
                                />
                            </p>
                            {isFilterShown && <div className="catalog-page__filter__search__dropdown__popup">
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                >
                                    По возрастанию цены
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                >
                                    По убыванию цены
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                >
                                    Сперва новые
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                >
                                    Сперва старые
                                </p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="catalog-page__filter__mobile">
                    <div className="catalog-page__filter__mobile__filters__wrapper">
                        <p className="catalog-page__filter__mobile__filters text" onClick={() => {
                            setFilter(!isFilterShown)
                        }}>
                            Фильтры<img src={dropdown} alt="" />
                        </p>
                        <img
                            src={search}
                            alt=""
                            className="catalog-page__filter__mobile__filters__search"
                            onClick={() => {
                                setMobile(!isMobileShown)
                            }}
                        />
                    </div>
                    {isFilterShown && <div className="catalog-page__filter__mobile__popup">
                        <div className="catalog-page__filter__mobile__firstrow">
                            <p className="catalog-page__filter__mobile__firstrow__row text">
                                Раздел:
                            </p>
                            <p
                                className="catalog-page__filter__mobile__firstrow-text text catalog-page__filter__items__all"
                            >
                                Все изделия
                            </p>
                            <p
                                className="catalog-page__filter__mobile__firstrow-text text catalog-page__filter__items__bags"
                            >
                                Сумки и аксессуары
                            </p>
                            <p
                                className="catalog-page__filter__mobile__firstrow-text text catalog-page__filter__items__decor"
                            >
                                Функциональный декор
                            </p>
                        </div>
                        <div className="catalog-page__filter__mobile__secondrow">
                            <p className="catalog-page__filter__mobile__firstrow__row text">
                                Сортировка:
                            </p>
                            <p
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                По возрастанию цены
                            </p>
                            <p
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                По убыванию цены
                            </p>
                            <p
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                Сперва новые
                            </p>
                            <p
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                Сперва старые
                            </p>
                        </div>
                    </div>}
                    {isMobileShown && <div className="catalog-page__filter__mobile__search__wrapper">
                        <input
                            type="text"
                            className="catalog-page__filter__mobile__search text"
                            placeholder="Поиск"
                        /><img
                            src={close}
                            alt=""
                            className="catalog-page__filter__mobile__search__img"
                            onClick={() => {
                                setMobile(!isMobileShown)
                            }}
                        />
                    </div>}
                </div>
                <div className="catalog-page__items">
                    {temp.map((item) => {
                        return <div className="catalog-page__items__item pointer" key={item.id} >
                            <Link to={`/card/${item.product_code}`} >
                                <img
                                    src={item.yoast_head_json.og_image[0].url}
                                    alt=""
                                    className="catalog-page__items__item__img"
                                />
                            </Link>
                            <p className="catalog-page__items__item__text text">{item.title.rendered}</p>
                            <div className="catalog-page__items__item__wrapper">
                                <img
                                    src={like}
                                    alt=""
                                    className={~liked.indexOf(item.product_code) && `catalog-page__items__item__wrapper__like pointer liked`}
                                    onClick={() => {
                                        likeHandler(item.product_code)
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
                </div>
            </section>}
        </>
    );
}

export default Catalog;