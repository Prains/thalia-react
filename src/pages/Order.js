import trash from '../images/trash.svg'
import down from '../images/down.svg'
import add from '../images/add.svg'
import arrow from '../images/arrow.svg'


const Order = () => {

    let isAny = false



    return (
        <section class="favourite">
            <h2 class="favourite__title title">Корзина</h2>
            <div class="favourite__items">
                {isAny && <div class="catalog-page__items__item pointer">
                    <img
                        src="../images/juta.png"
                        alt=""
                        class="catalog-page__items__item__img"
                    />
                    <p class="catalog-page__items__item__text text"></p>
                    <div class="catalog-page__items__item__wrapper">
                        <p class="catalog-page__items__item__wrapper__price text"></p>
                    </div>
                    <div class="catalog-page__items__item__bottom">
                        <img
                            src={trash}
                            alt=""
                            class="catalog-page__items__item__wrapper__like pointer"
                        />
                        <img
                            src={down}
                            alt=""
                            class="catalog-page__items__item__bottom__radius minus"
                        />
                        <p class="catalog-page__items__item__bottom__text text">1</p>
                        <img
                            src={add}
                            alt=""
                            class="catalog-page__items__item__bottom__radius plus"
                        />
                    </div>
                </div>}
            </div>
            {isAny && <a href="/" class="favourite__button text">Оформить заказ<img
                src={arrow}
                alt="arrowimg"
                class=""
            /></a>}
            {isAny === false && <p className='favourite__nothing'>Пока тут ничего.. Давайте что-нибудь закажем?</p>}
        </section>
    );
}

export default Order;