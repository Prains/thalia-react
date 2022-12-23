import './materials.scss'
import just from '../../../images/materials__just.png'
import arrow from '../../../images/arrow.svg'
import jute from '../../../images/materials__jute.png'
import rafia1 from '../../../images/materials__rafia1.png'
import rafiaright from '../../../images/materials__rafiaright.png'

import { useState } from 'react'
const Materials = () => {
    let [juteHidden, setJute] = useState(false)
    let [rafiaHidden, setRafia] = useState(false)



    return (
        <section className="materials">
            <h2 className="title materials__title">Натуральные материалы</h2>
            <div className="materials__elements">
                <div className="material__element">
                    {juteHidden == false && <img
                        src={just}
                        alt=""
                        className="material__img"
                        id="matJutImg"
                    />}
                    {juteHidden && <div className="material__popup" id="material__jute__popup">
                        <p
                            className="material__popup__text text"
                            id="material__jute__popup-text"
                        >
                            Джут — натуральное текстильное волокно, изготавливаемое из
                            растений одноимённого рода. Из этих волокон производят
                            преимущественно мешки, канаты, ковры, мебельные материи и
                            прочее. Джут применяется в смеси с абельмошевым волокном для
                            грубых тканей, например мешечной.
                        </p>
                    </div>}
                    <p className="title material__element__title">Джут</p>
                    <p
                        className="catal__center__text text pointer material__element__text"
                        id="material__jute__link"
                        onClick={() => { setJute(!juteHidden) }}
                    >
                        Узнать больше<img
                            src={arrow}
                            alt="arrowimg"
                            className=""
                        />
                    </p>
                </div>
                <div className="material__elementimg">
                    <img src={jute} alt="" />
                    <img src={rafia1} alt="" />
                </div>
                <div className="material__element">
                    {rafiaHidden === false && <img
                        src={rafiaright}
                        alt=""
                        className="material__img"
                        id="matRafImg"
                    />}
                    {rafiaHidden && <div className="material__popup" id="material__rafia__popup">
                        <p className="material__popup__text text" id="rafia">
                            Ра́фия — род растений семейства Пальмовые, родиной которых
                            является тропическая Африка и в особенности Мадагаскар, а также
                            для одного вида — Центральная и Южная Америка. Достигают в
                            высоту 16 метров.
                        </p>
                    </div>}
                    <p className="title material__element__title">Рафия</p>
                    <p
                        className="catal__center__text text pointer material__element__text"
                        id="material__rafia__link"
                        onClick={() => { setRafia(!rafiaHidden) }}
                    >
                        Узнать больше<img
                            src={arrow}
                            alt="arrowimg"
                            className=""
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Materials;