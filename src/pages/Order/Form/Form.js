import { arrow } from '../../../components/Icons/Icons'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react'
import './Form.scss'
const Form = (props) => {
    const form = useRef();
    const [isPending, setPending] = useState(false);
    let [textpend, setText] = useState('Загружается');
    const sendEmail = (e) => {
        e.preventDefault();
        setPending(true);
        emailjs.sendForm('service_or27jwm', 'template_6d7rhww', form.current, 'oVC29m1gCFrYp9F5t')
            .then((result) => {
                console.log(result.text);
                setText('Успешно!')
            }, (error) => {
                console.log(error.text);
                setText('Ошибка. Попробуйте еще раз позже')
            })
            .finally(() => { setTimeout(() => { props.setShown(!props.popupShown); setPending(false) }, 1500) });
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
                    <form className='overlay__form' onSubmit={sendEmail} ref={form} >
                        <input type="text" placeholder='Ваше имя' name="user_name" required minLength={2} />
                        <input type="email" placeholder='Ваша почта' name="user_email" required minLength={4} />
                        <input type="phone" placeholder='Ваш телефон' name="user_phone" required minLength={10} />
                        <input type="hidden" value={orderlist} name='user_list' />
                        <input type="hidden" value={priceAmount} name='user_amount' />
                        <button type="submit" >Отправить</button>
                    </form>
                    {isPending && <p className={`status ${textpend === 'Успешно' ? 'status_ok' : 'status_bad'}`}>{textpend}</p>}
                </div>
                <p className="catal__center__text text pointer overlay__block__link" onClick={() => { props.setShown(!props.popupShown) }}>
                    <img src={arrow} alt="arrowimg" className="" />
                    Скрыть
                </p>
            </div>
        </div >
    );
}

export default Form;