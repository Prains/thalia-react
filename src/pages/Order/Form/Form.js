import { arrow } from '../../../components/Icons/Icons'
import { useRef } from 'react'
import sendEmail from '../../../utils/sendEmail'
import './Form.scss'
import { useState } from 'react'
const Form = (props) => {
    const [isPending, setPending] = useState(false);
    let [textpend, setText] = useState('Загружается');
    const form = useRef();
    let orderlist = [];
    let priceAmount = 0;
    let popupShown = props.popupShown
    let setShown = props.setShown
    props.temp.forEach(element => {
        if (~localStorage.getItem('ordered').indexOf(element.acf.code)) {
            orderlist.push(element.title.rendered);
            priceAmount = priceAmount + Number(element.acf.price);
        }
    });
    let data = {
        isPending,
        setPending,
        textpend,
        setText,
        popupShown,
        form,
        setShown
    }
    return (
        <div className="overlay">
            <div className="overlay__block">
                <div className="overlay__block__text">
                    <h2 className="overlay__block__text__title title">
                        {props.title}
                    </h2>
                    <form className='overlay__form' onSubmit={(e) => {
                        e.preventDefault();
                        sendEmail(data)
                    }} ref={form} >
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