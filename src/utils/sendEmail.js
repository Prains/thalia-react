import emailjs from '@emailjs/browser';

const sendEmail = (data) => {
    data.setPending(true);
    emailjs.sendForm('service_or27jwm', 'template_6d7rhww', data.form.current, 'oVC29m1gCFrYp9F5t')
        .then((result) => {
            console.log(result.text);
            data.setText('Успешно')
        }, (error) => {
            console.log(error.text);
            data.setText('Ошибка. Попробуйте еще раз позже')
        })
        .finally(() => { setTimeout(() => { data.setShown(!data.popupShown); data.setPending(false) }, 1500) });
}

export default sendEmail;