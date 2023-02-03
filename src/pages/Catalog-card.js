import arrow from '../images/arrow.svg'
import { Link } from 'react-router-dom'
import { handleItemOnStorage } from '../utils/cartFunctions'
import { motion } from 'framer-motion'

const CatalogCard = (props) => {

    let productList = props.productList

    return (
        <motion.section className="novelties" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="novelties__title title">Каталог</h2>
            <div className="novelties__content">
                <div className="novelties__content__image-wrapper">
                    <div className="novelties__content__image-wrapper__top-image">
                        <img src={productList.acf.gallery} alt="" className="novelties__image pointer" />
                    </div>
                    <div className="novelties__content__image-wrapper__botom-images">
                    </div>
                </div>
                <div className="novelties__content__text-wrapper">
                    <h3 className="novelties__content__text-wrapper__title text">{productList.title.rendered}</h3>
                    <p className="novelties__content__text-wrapper__text text">{productList.acf.desc}</p>
                    <div className="novelties__content__text-wrapper__bottom">
                        <p
                            className="novelties__content__text-wrapper__bottom__text text"
                        >{productList.acf.price} Р</p>
                    </div>
                    <Link
                        to='/order'
                        className="mainbutton text pointer novelties__content__text-wrapper__button"
                        onClick={() => {
                            handleItemOnStorage(productList.acf.code, '', 'ordered')
                        }}
                    >
                        Купить сейчас<img src={arrow} alt="arrowimg" />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}

export default CatalogCard;