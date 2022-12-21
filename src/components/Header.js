import mainlogo from '../images/logo.svg'
import polygon from '../images/Polygon.svg'
import like from '../images/like.svg'
import basket from '../images/basket.svg'
import headervectro from '../images/header__vector.svg'
import burgerlogo from '../images/burger__logo.svg'
import burgervector from '../images/burger__vector.svg'
import tg from '../images/image_telegram.svg'
import vk from '../images/image_vk.svg'
import ig from '../images/image_instagram.svg'
import wa from '../images/image_whatsapp.svg'
import '../css/header.scss'
import '../css/burger.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {


    const [popupShown, setPopupShown] = useState(false)
    const [burgerShown, setBurger] = useState(false)

    return (
        <div>
            <header className="header">
                <Link to="/" className="logoimg">
                    <img src={mainlogo} alt="logoimg" className="logoimg pointer lazyload" />
                </Link>
                <div className="menu">
                    <div className="catalog">
                        <p className="header__text text pointer header__text__catalog" onClick={() => {
                            setPopupShown(!popupShown)
                        }}>Каталог</p>
                        <img src={polygon} alt="rectangle" className="polygon lazyload" />
                        {popupShown && <div className="catalog__popup">
                            <p className="catalog__popup__text text pointer">
                                <Link onClick={() => { setPopupShown(!popupShown) }} to="/catalog">Все изделия</Link>
                            </p>
                            <p className="catalog__popup__text text pointer">
                                <Link onClick={() => { setPopupShown(!popupShown) }} to="/catalog">Сумки и аксессуары</Link>
                            </p>
                            <p className="catalog__popup__text text pointer">
                                <Link onClick={() => { setPopupShown(!popupShown) }} to="/catalog">Функциональный декор</Link>
                            </p>
                        </div>}
                    </div>
                    <p className="header__text text pointer">
                        <Link to="/novelties">Новинки</Link>
                    </p>
                    <p className="header__text text pointer">
                        <Link to="/paymentndelivery">Оплата и доставка</Link>
                    </p>
                    <p className="header__text text pointer">
                        <Link to="/contacts">Контакты</Link>
                    </p>
                </div>
                <div className="headerimges">
                    <Link to="/favourites">
                        <img src={like} alt="like" className="like pointer lazyload" />
                    </Link>
                    <Link to="/order">
                        <img src={basket} alt="basket" className="basket pointer lazyload" />
                    </Link>
                    <img
                        src={headervectro}
                        alt="burger"
                        className="header__burger"
                        onClick={() => {
                            setBurger(!burgerShown)
                        }}
                    />
                </div>
            </header>
            {burgerShown && <div className="burger">
                <div className="burger__header">
                    <Link to="/" onClick={() => { setBurger(!burgerShown) }}>
                        <img
                            src={burgerlogo}
                            alt="logoimg"
                            className="burger__header__img pointer"
                        />
                    </Link>
                    <div className="burger__header__imges">
                        <Link to='/favourites' onClick={() => { setBurger(!burgerShown) }}>
                            <img src={like} alt="like" className="like pointer lazyload" />
                        </Link>
                        <Link to='/cargo' onClick={() => { setBurger(!burgerShown) }}>
                            <img src={basket} alt="basket" className="basket pointer lazyload" />
                        </Link>
                        <img
                            src={burgervector}
                            alt="vector"
                            className="burger__vector pointer"
                            onClick={() => { setBurger(!burgerShown) }}
                        />
                    </div>
                </div>
                <div className="burger__content">
                    <div className="catalog">
                        <p className="header__text text pointer burger__catalog__title" onClick={() => {
                            setPopupShown(!popupShown)
                        }}>
                            Каталог
                        </p>
                        <img src={polygon} alt="rectangle" className="polygon lazyload" />
                    </div>
                    {popupShown && <div className="burger__content__catalog-popup">
                        <p className="burger__content__catalog-popup__text text pointer">
                            <Link to="/catalog" onClick={() => { setBurger(!burgerShown); setPopupShown(!popupShown) }}> Сумки и аксессуары </Link>
                        </p>
                        <p className="burger__content__catalog-popup__text text pointer">
                            <Link to="/catalog" onClick={() => { setBurger(!burgerShown); setPopupShown(!popupShown) }}> Функциональный декор </Link>
                        </p>
                    </div>}
                    <p className="burger__content__text text pointer">
                        <Link to="/novelties" onClick={() => { setBurger(!burgerShown); setPopupShown(!popupShown) }}>Новинки</Link>
                    </p>
                    <p className="burger__content__text text pointer">
                        <Link to="/paymentndelivery" onClick={() => { setBurger(!burgerShown); setPopupShown(!popupShown) }}>Оплата и доставка</Link>
                    </p>
                    <p className="burger__content__text text pointer">
                        <Link to="/contacts" onClick={() => { setBurger(!burgerShown); setPopupShown(!popupShown) }}>Контакты</Link>
                    </p>
                </div>
                <div className="burger__footer">
                    <p className="burger__footer__text text">7 916 142 14 53</p>
                    <div className="burger__footer__social">
                        <a href="/#"
                        ><img
                                src={tg}
                                alt=""
                                className="burger__footer__social__icon"
                            /></a>
                        <a href="https://vk.com/thaliastudio"
                        ><img
                                src={vk}
                                alt=""
                                className="burger__footer__social__icon"
                            /></a>
                        <a href="/#"
                        ><img
                                src={ig}
                                alt=""
                                className="burger__footer__social__icon"
                            /></a>
                        <a href="/#"
                        ><img
                                src={wa}
                                alt=""
                                className="burger__footer__social__icon"
                            /></a>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Header;