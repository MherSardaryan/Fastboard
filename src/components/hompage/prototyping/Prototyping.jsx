import React from 'react'
import style from './Prototyping.module.css'
import imgRight from './img/image 24.png'
import Backgraundgrey from "../backgraungGrey/Backgraundgrey";
export default function Prototyping() {
    return (
        <div className={style.block}>
            <div className={style.itam}>
                <div className={style.leftBlock}>
                    <h2>Скоростное прототипирование</h2>
                    <ul>
                        <li>Виртуальные данные</li>
                        <li>Снижение нагрузки с разработчиков</li>
                        <li>Скоростная проверка гипотез</li>
                        <li>Бесшовный переход в боевую эксплуатацию</li>
                    </ul>
                    <h3>Забудьте про эскизы. Создавайте интерактивные макеты сразу в приложении</h3>
                </div>
                <div className={style.rightBlock}>
                    <div className={style.rightBlockItam}>
                        <img height={'100%'} src={imgRight} alt=""/>
                    </div>
                </div>

            </div>
            <Backgraundgrey />
        </div>
    )
}
