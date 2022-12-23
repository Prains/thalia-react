import { arrow } from '../../../components/Icons/Icons'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Form = (props) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_or27jwm', 'template_6d7rhww', form.current, 'oVC29m1gCFrYp9F5t')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        props.setShown(!props.popupShown)
    };
    let orderlist = [];
    let priceAmount = 0;
    props.temp.forEach(element => {
        if (~localStorage.getItem('ordered').indexOf(element.product_code)) {
            orderlist.push(element.title.rendered);
            priceAmount = priceAmount + Number(element.product_price);
        }
    });
    return (
        <div className="overlay">
            <div className="overlay__block">
                <div className="overlay__block__text">
                    <h2 className="overlay__block__text__title title">
                        {props.title}
                    </h2>
                    <form className='overlay__form' onSubmit={sendEmail} ref={form}>
                        <input type="text" placeholder='Ваше имя' name="user_name" />
                        <input type="email" placeholder='Ваша почта' name="user_email" />
                        <input type="phone" placeholder='Ваш телефон' name="user_phone" />
                        <input type="hidden" value={orderlist} name='user_list' />
                        <input type="hidden" value={priceAmount} name='user_amount' />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
                <p className="catal__center__text text pointer overlay__block__link" onClick={() => { props.setShown(!props.popupShown) }}>
                    <img src={arrow} alt="arrowimg" className="" />
                    Скрыть
                </p>
            </div>
        </div>
    );
}

export default Form;