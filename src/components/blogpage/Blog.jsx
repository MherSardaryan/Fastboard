import React from 'react'
import Header from "../hompage/header/Header";
import topimg1 from './img/Rectangle 4.png'
import topimg2 from './img/Vector 18.png'
import style from './Blog.module.css'
import {Link} from "react-router-dom";
import cardimg from './img/Rectangle 48.png'
import iconsvg from './img/Vector 5 (7).png'
import footherimg1 from './img/Rectangle 5.png'
import footherimg2 from './img/Vector 17.png'
export default function Blog() {
    const block = <div className={style.card}>
        <img src={cardimg} alt=""/>
        <div className={style.cardText}>
            <h3>Курс «Первые шаги в анализе данных»</h3>
            <p>Бесплатные международные курсы по графическому, продуктовому дизайну и веб-дизайну. Для фрилансеров, продуктовых компаний и digital-агентств.</p>
            <Link to={''} className={style.btn}>Подробнее</Link>
        </div>
    </div>
    return (
        <div className={style.block}>
            <div className="header">
                <Header />
            </div>
            <div>
                <img className={style.topimg1} src={topimg1} alt=""/>
                <img className={style.topimg2} src={topimg2} alt=""/>
            </div>
            <div className={style.back}></div>
            <div className={style.cointainerblocks}>
                <div className={style.topblock}>
                    <h2>Блог</h2>
                    <ul className={style.oldNav}>
                        <li><Link>Курсы</Link></li>
                        <li><Link to={'/arcticles'}>Статьи</Link></li>
                        <li><Link>Уроки</Link></li>
                        <li><Link>Вэбинары</Link></li>
                        <li><Link>Мероприятия</Link></li>
                    </ul>
                    <p>Бесплатные международные курсы по графическому, продуктовому дизайну и веб-дизайну. Для фрилансеров, продуктовых компаний и digital-агентств.</p>

                </div>
                <div className={style.bottomblock}>
                    {block}
                    {block}
                    {block}
                    {block}
                </div>
            </div>


            <button></button>
            <img src="" alt=""/>

            <div className={style.foother}>
                <ul>
                    <Link>Обзор</Link>
                    <Link>Возможности <img src={iconsvg} alt=""/>     </Link>
                    <Link>Документация</Link>
                    <Link>Демо-версия</Link>
                    <Link>Блог</Link>
                    <Link>Купить</Link>
                </ul>
                <p>
                    © 2023 Fastboard
                    <span>+7 (988) 456-78-99</span>
                </p>
                <div>
                    <img className={style.footherimg1} src={footherimg1} alt=""/>
                    <img className={style.footherimg2} src={footherimg2} alt=""/>
                </div>
            </div>
        </div>
    )
}
