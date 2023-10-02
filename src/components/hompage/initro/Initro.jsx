import React from 'react'
import style from './Initro.module.css'
import statickJpg from './img/taleroll.png'
export default function Initro() {
    return (
        <div className={style.block}>
            <div className={style.itam}>
                <div>
                    <h1 className={style.title}>
                        Стройте аналитику Быстро.
                    </h1>
                    <p className={style.text}>Прогрессивная BI-система нового <br/> поколения</p>
                    <div className={style.btns}>
                        <button className={style.btnInitroOne}>Попробовать <br/> <span>Бесплатно</span></button>
                        <button className={style.btnInitroTwo}>Купить</button>
                    </div>

                </div>
                <div>
                    <img className={style.statickJpg} src={statickJpg} alt=""/>
                </div>

            </div>

            <div className={'container'}>
                <div className={style.black }></div>
                <div className={style.white }></div>
                <div className={style.setka}></div>
            </div>

        </div>
    )
}
