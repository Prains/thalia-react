import '../css/footer.scss'
import footerlogo from '../images/footer__logo.svg'
import { Link } from 'react-router-dom'
import wa from '../images/image_whatsapp.svg'
import tg from '../images/image_telegram.svg'
import vk from '../images/image_vk.svg'
import ig from '../images/image_instagram.svg'


const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__content">
                <img src={footerlogo} alt="" class="footer__logo" />
                <div class="footer__nav">
                    <div class="footer__menu">
                        <h3 class="menu__title text">
                            <Link to="./catalog">Каталог</Link>
                        </h3>
                        <p class="menu__text text pointer">
                            <Link to="./catalog">Сумки и аксессуары</Link>
                        </p>
                        <p class="menu__text text pointer">
                            <Link to="./catalog">Функциональный декор</Link>
                        </p>
                        <p class="menu__text text pointer">
                            <Link to="./novelties">Новинки</Link>
                        </p>
                    </div>
                    <div class="footer__menu">
                        <h3 class="menu__title text">
                            <Link to="./paymentndelivery">Оплата и доставка</Link>
                        </h3>
                        <p class="menu__text text pointer">
                            <Link to="./paymentndelivery">Как заказать</Link>
                        </p>
                        <p class="menu__text text pointer">
                            <Link to="./tradenreturn">Обмен и возврат</Link>
                        </p>
                        <p class="menu__text text pointer">
                            <Link to="./contacts">Контакты</Link>
                        </p>
                    </div>
                </div>
                <div class="footer__social">
                    <p class="menu__text footer__social__text text">7 916 142 14 53</p>
                    <div class="footer__social__icons">
                        <Link to="/" target="_blank"
                        ><img src={tg} alt=""
                            /></Link>
                        <Link to="https://vk.com/thaliastudio" target="_blank" rel="noreferrer"
                        ><img src={vk} alt=""
                            /></Link>
                        <Link to="/" target="_blank"
                        ><img src={ig} alt=""
                            /></Link>
                        <Link to="/" target="_blank"
                        ><img src={wa} alt=""
                            /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;