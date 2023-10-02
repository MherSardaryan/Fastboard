import React from 'react'
import Header from "../hompage/header/Header";
import style from "./Articlespage.module.css";
import date from "./index";
import {Link} from "react-router-dom";
import topimg1 from "./img/Rectangle 4.png";
import topimg2 from "./img/Vector 18.png";
import iconsvg from "./img/Vector 5 (7).png";
import footherimg1 from "./img/Rectangle 5.png";
import footherimg2 from "./img/Vector 17.png";

export default function Articlespage() {

    return (
        <div className={style.block}>
            <Header />
            <div>
                <img className={style.topimg1} src={topimg1} alt=""/>
                <img className={style.topimg2} src={topimg2} alt=""/>
            </div>
            <div className={style.back}></div>
            <div className={style.cointainerblocks}>
                <div className={style.topblock}>
                    <h2>Статьи</h2>
                    <p>Пока тут будет такой заголовок. Когда появятся рубрики в меню будет выпадашка с ними, а тут выведем заголовок рубрики. Либо можно вывести сюда фильтр по темам. </p>
                   <div className={style.btns}>
                       <button>Все</button>
                       <button>Разработка</button>
                       <button>Аналитика</button>
                       <button>Дизайн</button>
                   </div>

                </div>
            </div>
            <div className={style.cards}>
                <div className={style.topcards}>
                    {
                        date.map((e,i)=>{
                          if( i < 2 ) {
                              return <div className={style.bannercard}>
                                  <img src={e.img} alt=""/>
                                  <div>
                                      <p>{e.cotegory}</p>
                                      <img src="" alt=""/>
                                      <p>{e.thime}</p>
                                  </div>
                                  <h2>{e.title}</h2>
                              </div>
                          } else return ''
                    })
                    }
                </div>
                <div className={style.allcards}>
                    {
                        date.map((e,i)=>{
                            if( i >= 2 ) {
                                return <div className={style.card}>
                                    <img src={e.img} alt=""/>
                                    <div>
                                        <p>{e.cotegory}</p>
                                        <img src="" alt=""/>
                                        <p>{e.thime}</p>
                                    </div>
                                    <h2>{e.title}</h2>
                                </div>
                            } else return ''})}

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

