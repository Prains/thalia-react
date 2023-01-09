import './catalog-page.scss'
import dropdown from '../../images/Polygon.svg'
import close from '../../images/mobile__close.svg'
import { useState } from 'react'
import search from '../../images/search.svg'
import { like, basket } from '../../components/Icons/Icons'
import { Link } from 'react-router-dom'
import { handleItemOnStorage } from '../../utils/cartFunctions'
import { motion } from 'framer-motion'
const Catalog = (props) => {

    let [isFilterShown, setFilterShown] = useState(false)
    let [isMobileShown, setMobile] = useState(false)
    let [productList, setCatalogItems] = useState(props.productList)
    let [liked, setLikedList] = useState(localStorage.getItem('liked'));
    let [ordered, setOrdered] = useState(localStorage.getItem('ordered'));
    let [filter, setFilterName] = useState('По возрастанию цены');
    let [type, setType] = useState('all')

    function handleChanges(value) {
        const catalogItems = props.productList.filter(word => ~word.title.rendered.indexOf(value));
        setCatalogItems(catalogItems)
    }

    function handleFilterChanges(type) {
        let itemsList = []
        switch (type) {
            case 'all':
                setType(type);
                setCatalogItems(props.productList);
                break;
            case '0':
                itemsList = makeItemList(type);
                console.log(itemsList)
                setType('0');
                setCatalogItems(itemsList);
                break;
            case '1':
                itemsList = makeItemList(type);
                setType(type);
                setCatalogItems(itemsList);
                break;
            default:
                break;
        }
    }

    function changePriceFilter(type) {
        let itemsList = [];
        switch (type) {
            default:
                break;
            case 'По возрастанию цены':
                productList.sort((a, b) => {
                    return b.acf.price - a.acf.price
                })
                setFilterName('По возрастанию цены')
                break;
            case 'По убыванию цены':
                productList.sort((a, b) => {
                    return a.acf.price - b.acf.price
                })
                setFilterName('По убыванию цены')
                break;
            case 'Сперва новые':
                productList.sort((a, b) => {
                    return a.id - b.id
                })
                setFilterName('Сперва новые')
                break;
            case 'Сперва старые':
                productList.sort((a, b) => {
                    return b.id - a.id
                })
                setFilterName('Сперва старые')
                break;

        }
    }

    function makeItemList(type) {
        let array = []
        return array = props.productList.filter(a =>
            a.acf.type === type
        );
    }

    return (
        <>
            {productList && <motion.section className="catalog-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="catalog-page__title title">Каталог</h2>
                <div className="catalog-page__filter">
                    <div className="catalog-page__filter__items">
                        <p
                            className={`catalog-page__filter__items__text catalog-page__filter__items__all text ${type === 'all' ? 'selected' : ''}`}
                            onClick={
                                () => {
                                    handleFilterChanges('all')
                                }
                            }
                        >

                            Все изделия
                        </p>
                        <p
                            className={`catalog-page__filter__items__text catalog-page__filter__items__all text ${type === '0' ? 'selected' : ''}`}
                            onClick={
                                () => {
                                    handleFilterChanges('0')
                                }
                            }
                        >
                            Сумки и аксессуары
                        </p>
                        <p
                            className={`catalog-page__filter__items__text catalog-page__filter__items__all text ${type === '1' ? 'selected' : ''}`}
                            onClick={
                                () => {
                                    handleFilterChanges('1')
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
                                    setFilterShown(!isFilterShown)
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
                                        changePriceFilter('По возрастанию цены');
                                    }}
                                >
                                    По возрастанию цены
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        changePriceFilter('По убыванию цены');
                                    }}
                                >
                                    По убыванию цены
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        changePriceFilter('Сперва новые')
                                    }}
                                >
                                    Сперва новые
                                </p>
                                <p
                                    className="catalog-page__filter__search__dropdown__popup__text text pointer"
                                    onClick={() => {
                                        changePriceFilter('Сперва старые')
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
                            setFilterShown(!isFilterShown)
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
                                        handleFilterChanges('all')
                                    }
                                }
                            >
                                Все изделия
                            </p>
                            <p
                                className="catalog-page__filter__mobile__firstrow-text text catalog-page__filter__items__bags"
                                onClick={
                                    () => {
                                        handleFilterChanges('0')
                                    }
                                }
                            >
                                Сумки и аксессуары
                            </p>
                            <p
                                onClick={
                                    () => {
                                        handleFilterChanges('1')
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
                                    changePriceFilter('По возрастанию цены')
                                }}
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                По возрастанию цены
                            </p>
                            <p
                                onClick={() => {
                                    changePriceFilter('По убыванию цены')
                                }}
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                По убыванию цены
                            </p>
                            <p
                                onClick={() => {
                                    changePriceFilter('Сперва новые')
                                }}
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                            >
                                Сперва новые
                            </p>
                            <p
                                className="catalog-page__filter__mobile__secondrow__text text pointer catalog-page__filter__search__dropdown__popup__text"
                                onClick={() => {
                                    changePriceFilter('Сперва старые')
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
                    {productList.map((item) => {
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
                                        handleItemOnStorage(item.acf.code, setLikedList, 'liked')
                                    }}
                                />
                                <p className="catalog-page__items__item__wrapper__price text">{item.acf.price} Р</p>
                                <img
                                    src={basket}
                                    alt=""
                                    className={~ordered.indexOf(item.acf.code) && "catalog-page__items__item__wrapper__basket pointer ordered"}
                                    onClick={() => {
                                        handleItemOnStorage(item.acf.code, setOrdered, 'ordered')
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