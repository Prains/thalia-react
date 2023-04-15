import "./contacts.scss";
import { waC, tgC, vkC, igC } from "../../components/Icons/Icons";
import { motion } from "framer-motion";

const Title = () => {
  return <h2 className="contacts__title title">Контакты</h2>;
};

const Subtitle = ({ text }) => {
  return <p className="contacts__subtitle text">{text}</p>;
};

const SocialElement = ({ imgSrc, href, text }) => {
  return (
    <div className="contacts__social__element">
      <img src={imgSrc} alt="" className="contacts__social__element__img" />
      <a
        className="catal__center__text contacts__social__element__text text"
        target="_blank"
        rel="noreferrer"
        href={href}
      >
        {text}
      </a>
    </div>
  );
};

const Contacts = () => {
  return (
    <motion.section
      className="contacts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Title />
      <Subtitle text="Для связи с нами напишите или позвоните любым удобным для Вас способом" />
      <div className="contacts__social">
        <SocialElement imgSrc={tgC} href="https://t.me/thalia_crochetstudio" text="@thalia_crochetstudio" />
        <SocialElement
          imgSrc={vkC}
          href="https://vk.com/thaliastudio"
          text="Thalia Studio"
        />
        <SocialElement imgSrc={igC} href="https://www.instagram.com/thalia_crochetstudio/" text="@thalia_crochetstudio" />
        <SocialElement imgSrc={waC} href="https:/wa.me/+79161421453" text="Natalia Leskova" />
      </div>
      <Subtitle text="Или свяжитесь с нами по номеру телефона" />
      <p className="contacts__number">7 916 142 14 53</p>
    </motion.section>
  );
};

export default Contacts;
