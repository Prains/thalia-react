import './payments.scss'
import claw from '../../images/payment__mainimg.jpg'
import { motion } from 'framer-motion'

const Paymentndelivery = () => {



    return (
        <motion.main className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <section className="payment">
                <h2 className="payment__title title">Оплата и доставка</h2>
                <div className="payment__top">
                    <div className="payment__top__text">
                        <div className="payment__top__text-wrapper">
                            <h2 className="payment__top__text-wrapper__title title">
                                Сроки изготовления
                            </h2>
                            <p className="payment__top__text-wrapper__text text">
                                Если понравившейся Вам вещи нет в наличии, то срок изготовления под заказ составляет от 7 до 20 дней с учетом текущих заказов. Но, по возможности, мы стараемся связать ее для Вас как можно быстрее.
                            </p>
                        </div>
                        <div className="payment__top__text-wrapper">
                            <h2 className="payment__top__text-wrapper__title title">Оплата</h2>
                            <p className="payment__top__text-wrapper__text text">
                                Оплата производится на счет частями: 50% при заказе и 50% после предоставления фото и видео в готовом виде до отправки. Реквизиты для оплаты мы пришлем Вам после оформления заказа на сайте.
                            </p>
                        </div>
                    </div>
                    <img
                        src={claw}
                        alt="klubok ogromniy"
                        className="payment__img"
                    />
                </div>
                <h2 className="payment__top__text-wrapper__title title">
                    Доставка по миру
                </h2>
                <p className="payment__top__text-wrapper__text text">
                    Доставляем с помощью любой удобной Вам курьерской службы или Почтой России.
                    Стоимость доставки рассчитывается отдельно.
                </p>
                <h2 className="payment__top__text-wrapper__title title">
                    Доставка по Москве
                </h2>
                <p className="payment__top__text-wrapper__text text">
                    Возможна доставка по городу курьером (200 руб.) или самовывоз по предварительной договоренности.
                </p>
            </section>
        </motion.main>
    );
}

export default Paymentndelivery;