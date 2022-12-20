import '../../css/soul.scss'
import ropeF from '../../images/rope1.png'
import jute from '../../images/image_jute.png'
import handmande from '../../images/handmade.png'
import rafia from '../../images/rafia.png'
const Soul = () => {
    return (
        <section className="soul">
            <img src={ropeF} alt="rope" className="rope lazyload" />
            <div className="soul__section">
                <h2 className="title soul__title">Для души и красоты</h2>
                <p className="text soul__text">
                    Thalia Studio - это изделия из натуральных материалов таких, как
                    джут и рафия. Это красивые сумочки, созданные с душой и любовью к
                    своему делу.
                </p>
                <div className="soul__subsection">
                    <p className="subsection__text title">Ручная работа</p>
                    <img src={jute} alt="jute" className="lazyload" />
                    <div className="soul__undertext">
                        <p className="undertext__uppertitle title">Джут</p>
                        <p className="undertext__text text">
                            Натуральное волокно из Юго-Восточной Азии
                        </p>
                    </div>
                </div>
                <div className="soul__imgrow">
                    <img src={handmande} alt="" className="lazyload" />
                    <div className="imgrow__text">
                        <p className="undertext__uppertitle title">Рафия</p>
                        <p className="undertext__text text">
                            Натуральное волокно из листьев пальмы
                        </p>
                    </div>
                    <img src={rafia} alt="" className="lazyload" />
                </div>
            </div>
        </section>
    );
}

export default Soul;