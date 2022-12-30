import './payments.scss'

import claw from '../../images/payment__mainimg.jpg'

import {motion} from 'framer-motion'

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
                                Каждое изделие вяжется по Вашему заказу, срок изготовления
                                составляет от 7 до 20 дней с учетом текущих заказов. Но по
                                возможности мы стараемся связать изделие как можно быстрее.
                            </p>
                        </div>
                        <div className="payment__top__text-wrapper">
                            <h2 className="payment__top__text-wrapper__title title">Оплата</h2>
                            <p className="payment__top__text-wrapper__text text">
                                Оплата на сайте 100% с помощью банковской карты. Возможна оплата
                                2 частями: 50% во время заказа и 50% по готовности изделия, для
                                этого напишите нам любым удобным способом по WhatsApp,
                                VKontakte, в Telegram или Instagram.
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
                    Доставляем с помощью курьерской службы СДЭК и Почтой России. Стоимость
                    рассчитывается индивидуально, исходя из удаленности Вашего города от
                    г.Москва. Для расчета стоимости доставки напишите нам по WhatsApp,
                    VKontakte, в Telegram или Instagram.
                </p>
                <h2 className="payment__top__text-wrapper__title title">
                    Доставка по Москве
                </h2>
                <p className="payment__top__text-wrapper__text text">
                    Доставку Ваших заказов по Москве может осуществить курьер, стоимость
                    доставки - 200 руб. Возможен самовыоз по предварительной
                    договоренности, для этого напишите нам по WhatsApp, VKontakte, в
                    Telegram или Instagram.
                </p>
            </section>
        </motion.main>
    );
}

export default Paymentndelivery;