import basket from '../images/basket.svg'
import trash from '../images/trash.svg'
import '../css/favourite.scss'
import '../css/catalog-page.scss'

const Favourites = () => {
    let isAny = false
    return (
        <section class="favourite">
            <h2 class="favourite__title title">Избранное</h2>
            <div class="favourite__items">
                {isAny && <div class="catalog-page__items__item pointer">
                    <img
                        src="../images/juta.png"
                        alt=""
                        class="catalog-page__items__item__img"
                    />
                    <p class="catalog-page__items__item__text text"></p>
                    <div class="catalog-page__items__item__wrapper">
                        <img
                            src={trash}
                            alt=""
                            class="catalog-page__items__item__wrapper__like pointer"
                        />
                        <p class="catalog-page__items__item__wrapper__price text"></p>
                        <img
                            src={basket}
                            alt=""
                            class="catalog-page__items__item__wrapper__basket pointer"
                        />
                    </div>
                </div>}
                {isAny === false && <p className='favourite__nothing'>Пока ничего нет. Добавим пару сумочек?</p>}
            </div>
        </section>
    );
}

export default Favourites;