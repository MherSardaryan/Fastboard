import React from 'react'
import style from './foother.module.css'
import logo from    '../../hompage/header/img/logo.png'
export default function Footherevent() {
    return (
        <div className={style.block}>
            <div>
                <img src={logo} alt=""/>
                <p className={style.text}>Прогрессивная BI-система <br/> нового поколения   </p>
                <p className={style.c}>© 2023 Fastboard</p>
            </div>
            <div className={style.table} >
                <ul>
                    <li className={style.tableLi}>Возможности</li>
                    <li>Скоростное прототипирование</li>
                    <li>Гибкая работа со стилем</li>
                    <li>Работа с данными на SQL</li>
                    <li>Импорт из популярных форматов</li>
                    <li>Кластеризация</li>
                    <li>Колоночная база данных</li>
                </ul>
                <ul>
                    <li className={style.tableLi}>События</li>
                    <li>Конференции</li>
                    <li>Вэбинары</li>
                    <li>Митапы</li>

                </ul>
                <ul>
                    <li className={style.tableLi}>Ресурсы</li>
                    <li>Руководство</li>
                    <li>Обучение</li>
                    <li>Курсы</li>
                    <li>Уроки</li>
                    <li>Статьи</li>
                </ul>
                <ul>
                    <li className={style.tableLi}>Контакты</li>
                    <li>Перезвоните мне</li>
                    <li>Оставить заявку</li>
                    <li>Задать вопрос</li>
                    <li>+7 (988) 456-78-99</li>
                    <li>welcome@fastboard.ru</li>
                </ul>
            </div>
        </div>
    )
}
