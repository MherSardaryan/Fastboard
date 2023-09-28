import React from 'react'
import style from './Utility.module.css'
import icon1 from './img/Frame 53.png'
import icon2 from './img/Frame 583.png'
import icon3 from './img/Frame3.png'
export default function Utility() {
    return (
        <div  className={style.block}>
            <h2 className={style.title}>Кому полезен?</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <img width={'100px'} src={icon1} alt=""/>
                    <h4>BI-разработчикам</h4>
                    <ul className={style.ul}>
                        <li>Привычный язык SQL-запросов, для создание скриптов и функций.</li>
                        <li>ETL-инструменты для извлечения и трансформации данных</li>
                        <li>Высокая гибкость и несколько парадигм разработки</li>
                    </ul>
                </div>
                <div className={style.card}>
                    <img width={'100px'} src={icon2}  alt=""/>
                    <h4>Аналитикам</h4>
                    <ul className={style.ul}>
                        <li>Прототипирование дэшбордов без данных</li>
                        <li>Проверка гипотез и согласовыванте решений не привлекая разработчика</li>
                        <li>Бесшовный переход в боевую эксплуатацию</li>
                    </ul>
                </div>
                <div className={style.card}>
                    <img width={'100px'} src={icon3}  alt=""/>
                    <h4>Бизнес-пользователям</h4>
                    <ul className={style.ul}>
                        <li>Красивая и эффективная визуализация данных, которая поможет быстро понять ключевые метрики</li>
                        <li>Адаптивность к устройствам и форматам</li>
                        <li>Регулярные обновления и актуальные данные</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
