import arrow from '../images/arrow.svg'

const CatalogCard = (props) => {
    let temp = props.temp

    return (
        <section className="novelties">
            <h2 className="novelties__title title">Каталог</h2>
            <div className="novelties__content">
                <div className="novelties__content__image-wrapper">
                    <div className="novelties__content__image-wrapper__top-image">
                        <img src={temp.yoast_head_json.og_image[0].url} alt="" className="novelties__image pointer" />
                    </div>
                    <div className="novelties__content__image-wrapper__botom-images">
                    </div>
                </div>
                <div className="novelties__content__text-wrapper">
                    <h3 className="novelties__content__text-wrapper__title text">{temp.title.rendered}</h3>
                    <p className="novelties__content__text-wrapper__text text">{temp.product_description}</p>
                    <div className="novelties__content__text-wrapper__bottom">
                        <p
                            className="novelties__content__text-wrapper__bottom__text text"
                        >{temp.product_price} Р</p>
                    </div>
                    <button
                        type="button"
                        name="button"
                        className="mainbutton text pointer novelties__content__text-wrapper__button"
                    >
                        Купить сейчас<img src={arrow} alt="arrowimg" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CatalogCard;