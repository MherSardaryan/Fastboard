import React from 'react'
import style from './Workingwithdata.module.css'
import Backgraundgrey from "../backgraungGrey/Backgraundgrey";
import img11 from './img/1.png'
import img22 from './img/2.png'
export default function Workingwithdata() {
    return (
        <div className={style.block}>
            <div className={style.itam}>
                <div className={style.leftBlock}>
                    <h2>Работа с данными на  <br/> привычном языке</h2>
                    <ul>
                        <li>Выбор и извлечение данных из <br/> источников</li>
                        <li>ETL и скрипт загрузки</li>
                        <li>Асcоцатиная модель и осторова данных</li>
                        <li>Настройка расчетов в изуализаторах</li>
                        <li>Гибкая фильтрация на уровне <br/> элементов</li>
                        <li>Обновления по расписанию</li>
                    </ul>
                    <h3>SQL интегрирован в ключевые <br/> орграны манипуляций с данными </h3>
                </div>
            </div>
            <div className={style.rightBlock}>
                <div className={style.rightBlockItam}></div>

                <img className={style.img11} src={img11} alt=""/>
                <img className={style.img22} src={img22} alt=""/>


            </div>
            <div className={'container'}>
                <Backgraundgrey />
            </div>

        </div>
    )
}
