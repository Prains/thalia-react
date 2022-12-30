import './catalog-page.scss'
import dropdown from '../../images/Polygon.svg'
import close from '../../images/mobile__close.svg'
import { useState } from 'react'
import search from '../../images/search.svg'
import { like, basket } from '../../components/Icons/Icons'
import { Link } from 'react-router-dom'
import { handleItemOnLocal } from '../../utils/cartFunctions'
import { motion } from 'framer-motion'
const Catalog = (props) => {

    let [isFilterShown, setFilter] = useState(false)
    let [isMobileShown, setMobile] = useState(false)
    let [temp, setTemp] = useState(props.temp)
    let [liked, setLike] = useState(localStorage.getItem('liked'));
    let [ordered, setOrder] = useState(localStorage.getItem('ordered'));
    let [filter, setFilterName] = useState('По возрастанию цены');
    let [type, setType] = useState('all')

    function handleChanges(value) {
        const tempArray = props.temp.filter(word => ~word.title.rendered.indexOf(value));
        setTemp(tempArray)
    }

    return (
        <>
            {temp && <motion.section className="catalog-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="catalog-page__title title">Каталог</h2>
                <div className="catalog-page__filter">
                    <div className="catalog-page__filter__items">
                        <p
                            className={`catalog-page__filter__items__text catalog-page__filter__items__all text ${type === 'all' ? 'selected' : ''}`}
                            onClick={
                                () => {
                                    setType('all')
                                    setTemp(props.temp)
                                }
                            }
                        >

                            Все изделия
                        </p>
                        <p
                            className={`catalog-page__filter__items__text catalog-page__filter__items__all text ${type === '0' ? 'selected' : ''}`}
                            onClick={
                                () => {
                                    const tempArray = props.temp.filter(a =>
                                        a.product_type === '0'
                                    )
                                    setType('0')
                                    setTemp(tempArray)
                                }
                            }
                        >
                            Сумки и аксессуары
                        </p>
                        <p
                            className={`catalog-page__filter__items__text catalog-page__filter__items__all text ${type === '1' ? 'selected' : ''}`}
                            onClick={
                                () => {
                                    const tempArray = props.temp.filter(a =>
                                        a.product_type === '1'
                                    )
                                    setType('1')
                                    setTemp(tempArray)
                                }
                            }
                        >
                            Функциональный декор
                        </p>
                    </div>
                    <div className="catalog-page__filter__search">
                        <input
                            type="text"
                            className="catalog-page__filter__search__input"
                            placeholder="Поиск"
                            onChange={(e) => {
                                handleChanges(e.target.value)
                            }}
                        />
                        <div className="catalog-page__filter__search__dropdown">
                            <p
                                className="catalog-page__filter__search__dropdown__text text pointer"
                                onClick={() => {
                                    setFilter(!isFilterShown)
                                }}
                            >
                                {filter}
                                <img
                                    src={dropdown}
                                    alt="rectangle"
                                    className="polygon"
                                />
                            </p>
                            {isFilterShown && <div className="catalog-page__filter__search__dropdown__popup">
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        temp.sort((a, b) => {
                                            return b.product_price - a.product_price
                                        })
                                        setFilterName('По возрастанию цены')
                                    }}
                                >
                                    По возрастанию цены
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        temp.sort((a, b) => {
                                            return a.product_price - b.product_price
                                        })
                                        setFilterName('По убыванию цены')
                                    }}
                                >
                                    По убыванию цены
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        temp.sort((a, b) => {
                                            return a.id - b.id
                                        })
                                        setFilterName('Сперва новые')
                                    }}
                                >
                                    Сперва новые
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        temp.sort((a, b) => {
                                            return b.id - a.id
                                        })
                                        setFilterName('Сперва старые')
                                    }}
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
                                onClick={
                                    () => {
                                        const tempArray = props.temp.filter(a =>
                                            a.product_type === 'all'
                                        )
                                        setFilter(!isFilterShown)
                                        setType('all')
                                        setTemp(tempArray)
                                    }
                                }
                            >
                                Все изделия
                            </p>
                            <p
                                className="catalog-page__filter__mobile__firstrow-text text catalog-page__filter__items__bags"
                                onClick={
                                    () => {
                                        const tempArray = props.temp.filter(a =>
                                            a.product_type === '0'
                                        )
                                        setFilter(!isFilterShown)
                                        setType('0')
                                        setTemp(tempArray)
                                    }
                                }
                            >
                                Сумки и аксессуары
                            </p>
                            <p
                                onClick={
                                    () => {
                                        const tempArray = props.temp.filter(a =>
                                            a.product_type === '1'
                                        )
                                        setFilter(!isFilterShown)
                                        setType('1')
                                        setTemp(tempArray)
                                    }
                                }
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
                                onClick={() => {
                                    temp.sort((a, b) => {
                                        return b.product_price - a.product_price
                                    })
                                    setFilter(!isFilterShown)
                                    setFilterName('По возрастанию цены')
                                }}
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                По возрастанию цены
                            </p>
                            <p
                                onClick={() => {
                                    temp.sort((a, b) => {
                                        return a.product_price - b.product_price

                                    })
                                    setFilter(!isFilterShown)
                                    setFilterName('По убыванию цены')
                                }}
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                По убыванию цены
                            </p>
                            <p
                                onClick={() => {
                                    temp.sort((a, b) => {
                                        return a.id - b.id
                                    })
                                    setFilter(!isFilterShown)
                                    setFilterName('Сперва новые')
                                }}
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                Сперва новые
                            </p>
                            <p
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                                onClick={() => {
                                    temp.sort((a, b) => {
                                        return b.id - a.id
                                    })
                                    setFilter(!isFilterShown)
                                    setFilterName('Сперва старые')
                                }}
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
                            onChange={(e) => {
                                handleChanges(e.target.value)
                            }}
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
                            <Link to={`/card/${item.acf.code}`} >
                                <img
                                    src={item.acf.gallery.toString()}
                                    alt={item.title.rendered}
                                    className="catalog-page__items__item__img"
                                />
                            </Link>
                            <p className="catalog-page__items__item__text text">{item.title.rendered}</p>
                            <div className="catalog-page__items__item__wrapper">
                                <img
                                    src={like}
                                    alt=""
                                    className={~liked.indexOf(item.acf.code) && `catalog-page__items__item__wrapper__like pointer liked`}
                                    onClick={() => {
                                        handleItemOnLocal(item.acf.code, setLike, 'liked')
                                    }}
                                />
                                <p className="catalog-page__items__item__wrapper__price text">{item.acf.price} Р</p>
                                <img
                                    src={basket}
                                    alt=""
                                    className={~ordered.indexOf(item.acf.code) && "catalog-page__items__item__wrapper__basket pointer ordered"}
                                    onClick={() => {
                                        handleItemOnLocal(item.acf.code, setOrder, 'ordered')
                                    }}
                                />
                            </div>
                        </div>
                    })}
                </div>
            </motion.section>}
        </>
    );
}

export default Catalog;