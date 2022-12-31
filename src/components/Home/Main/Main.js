import claw from '../../../images/mainimg.png'
import arrow from '../../../images/arrow.svg'
import './main.scss'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <section className="main">
            <h1 className="main__title title">Cтудия вязаного уюта</h1>
            <img src={claw} alt="mainimg" className="mainimg lazyload" />
            <Link to="/catalog" className="mainbutton text pointer">
                Перейти в каталог<img src={arrow} alt="arrowimg" />
            </Link>
        </section>
    );
}

export default Main;