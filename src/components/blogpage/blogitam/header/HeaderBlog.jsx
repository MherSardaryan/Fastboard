import React from 'react'
import style from './Header.module.css'
import {Link} from "react-router-dom";
import whitelogo from '../../../events/header/img/logo2.png'
import search from './img/search.png'
export default function HeaderBlog({props}) {

    return (
        <div className={style.block}>
            <div className={style.header}>
                <div className={style.logoblock}>
                    <div className={style.logo} >
                        <Link to={'/'} ><img  src={whitelogo} alt="Logo"/></Link>
                    </div>
                    <h2>{props?props:'Блог' }</h2>
                </div>

                <div className={style.rightbar}>
                    <div className={style.nav}>
                        <Link to={''}>Руководство</Link>
                        <Link to={''}>Сообщество</Link>
                        <Link to={''}>Статьи</Link>
                        <Link to={''}>Уроки</Link>
                        <Link to={''}>Курсы</Link>
                    </div>
                    <img width={'24px'} height={'24px'} src={search} alt=""/>
                </div>
            </div>
        </div>

    )
}
