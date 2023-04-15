import "./footer.scss";
import footerlogo from "../../images/footer__logo.svg";
import { Link } from "react-router-dom";
import wa from "../../images/image_whatsapp.svg";
import tg from "../../images/image_telegram.svg";
import vk from "../../images/image_vk.svg";
import ig from "../../images/image_instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={footerlogo} alt="" className="footer__logo" />
        <div className="footer__nav">
          <div className="footer__menu">
            <h3 className="menu__title text">
              <Link to="./catalog">Каталог</Link>
            </h3>
            <p className="menu__text text pointer">
              <Link to="./catalog">Сумки и аксессуары</Link>
            </p>
            <p className="menu__text text pointer">
              <Link to="./catalog">Функциональный декор</Link>
            </p>
            <p className="menu__text text pointer">
              <Link to="./novelties">Новинки</Link>
            </p>
          </div>
          <div className="footer__menu">
            <h3 className="menu__title text">
              <Link to="./paymentndelivery">Оплата и доставка</Link>
            </h3>
            <p className="menu__text text pointer">
              <Link to="./paymentndelivery">Как заказать</Link>
            </p>
            <p className="menu__text text pointer">
              <Link to="./tradenreturn">Обмен и возврат</Link>
            </p>
            <p className="menu__text text pointer">
              <Link to="./contacts">Контакты</Link>
            </p>
          </div>
        </div>
        <div className="footer__social">
          <p className="menu__text footer__social__text text">
            7 916 142 14 53
          </p>
          <div className="footer__social__icons">
            <a
              href="https://t.me/thalia_crochetstudio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tg} alt="" />
            </a>
            <a
              href="https://vk.com/thaliastudio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={vk} alt="" />
            </a>
            <a
              href="https://www.instagram.com/thalia_crochetstudio/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ig} alt="" />
            </a>
            <a href="https:/wa.me/+79161421453" target="_blank" rel="noreferrer">
              <img src={wa} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
