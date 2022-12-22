import '../css/contacts.scss'
import tg from '../images/contacts__tg.svg'
import vk from '../images/contacts_vk.svg'
import ig from '../images/contacts__ig.svg'
import wa from '../images/contacts__wa.svg'

const Contacts = () => {
    return (
        <section class="contacts">
            <h2 class="contacts__title title">Контакты</h2>
            <p class="contacts__subtitle text">
                Для связи с нами напишите или позвоните любым удобным для Вас способом
            </p>
            <div class="contacts__social">
                <div class="contacts__social__element">
                    <img
                        src={tg}
                        alt=""
                        class="contacts__social__element__img"
                    />
                    <a
                        class="catal__center__text contacts__social__element__text text"
                        target="_blank"
                        href="/#"
                    >@thalia_crochetstudio</a>
                </div>
                <div class="contacts__social__element">
                    <img
                        src={vk}
                        alt=""
                        class="contacts__social__element__img"
                    />
                    <a
                        class="catal__center__text contacts__social__element__text text"
                        href="https://vk.com/thaliastudio"
                        target="_blank"
                        rel="noreferrer"
                    >Thalia Studio</a>
                </div>
                <div class="contacts__social__element">
                    <img
                        src={ig}
                        alt=""
                        class="contacts__social__element__img"
                    />
                    <a
                        class="catal__center__text contacts__social__element__text text"
                        target="_blank"
                        href="/#"
                    >@thalia_crochetstudio</a>
                </div>
                <div class="contacts__social__element">
                    <img
                        src={wa}
                        alt=""
                        class="contacts__social__element__img"
                    />
                    <a
                        class="catal__center__text contacts__social__element__text text"
                        target="_blank"
                        href="/#"
                    >Natalia Leskova
                    </a>
                </div>
            </div>
            <p class="contacts__subtitle">
                Или свяжитесь с нами по номеру телефона
            </p>
            <p class="contacts__number">7 916 142 14 53</p>
        </section>
    );
}

export default Contacts;