import claw from '../../images/mainimg.png'
import arrow from '../../images/arrow.svg'
import '../../css/main.scss'
const Main = () => {
    return (
        <section className="main">
            <h1 className="main__title title">Мастерская вязаного уюта</h1>
            <img src={claw} alt="mainimg" className="mainimg lazyload" />
            <a href="./catalog" className="mainbutton text pointer">
                Перейти в каталог<img src={arrow} alt="arrowimg" />
            </a>
        </section>
    );
}

export default Main;