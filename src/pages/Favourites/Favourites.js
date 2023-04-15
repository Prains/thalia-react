import { basket, trash } from '../../components/Icons/Icons'
import './favourite.scss'
import { useState } from 'react'
import { removeItemOnStorage, makeNewCartArray, handleItemOnStorage } from '../../utils/cartFunctions'
import { motion } from 'framer-motion'

const Favourites = (props) => {
    let productList = props.productList

    let [likedItems, setLikedItems] = useState(productList.filter(item =>
        localStorage.getItem('liked').indexOf(item.acf.code) !== -1
    ))

    function handleCartItemDelete(code, setRender, state, array) {
        removeItemOnStorage(code, setRender, state)
        setRender(makeNewCartArray(array, state, code))
    }

    function handleCartItemOrder(code, setRender, state, array) {
        handleItemOnStorage(code, setRender, state)

        let likedListArray = productList.filter(item =>
            localStorage.getItem('liked').indexOf(item.acf.code) !== -1
        )

        setRender(likedListArray)
    }


    return (
        <motion.section className="favourite" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="favourite__title title">Избранное</h2>
            <div className="favourite__items">
                {likedItems && likedItems.map((item) => {
                    return <div className="catalog-page__items__item pointer" key={item.id}>
                        <img
                            src={item.acf.gallery}
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
                                    handleCartItemDelete(item.acf.code, setLikedItems, 'liked', likedItems)
                                }}
                            />
                            <p className="catalog-page__items__item__wrapper__price text">{item.acf.price} Р</p>
                            <img
                                src={basket}
                                alt=""
                                className={`catalog-page__items__item__wrapper__basket pointer ${~localStorage.getItem('ordered').indexOf(item.acf.code) ? 'ordered' : ''}`}
                                onClick={() => handleCartItemOrder(item.acf.code, setLikedItems, 'ordered', likedItems)}
                            />
                        </div>
                    </div>
                })}
                {likedItems.length === 0 && <p className='favourite__nothing'>Пока ничего нет. Добавим пару сумочек?</p>}
            </div>
        </motion.section >
    );
}

export default Favourites;