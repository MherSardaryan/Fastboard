import React,{useState} from 'react'
import style from "./header.module.css";
import {Link} from "react-router-dom";
import icon from './img/Vector 5 (6).png'

    const manu1_in = <ul className={style.manu1_in}>
        <Link to={''}><li>Вэбинары</li> </Link>
        <Link to={''}><li>Курсы</li> </Link>
        <Link to={''}><li>Уроки</li> </Link>
    </ul>
    const manu1_in1 = <ul className={style.manu1_in}>
        <Link to={'/arcticles'}><li>Статьи</li> </Link>

    </ul>
    const manu1 = <ul className={style.modalManu}>
        <Link to={'/'}><li>Документация</li></Link>
        <Link  ><li className={style.manuLi}>Обучение {manu1_in}</li></Link>
        <Link to={'/blog'}><li className={style.manuLi}>Блог {manu1_in1}</li></Link>
    </ul>
    const manu2 = <ul className={style.modalManu}>
        <Link to={'/'}><li>Вэбинары</li></Link>
        <Link  ><li> Митапы</li></Link>
        <Link ><li> Конфы</li></Link>
    </ul>

export default function Navbar() {

    const [state,setState] = useState('')
    const [state2,setState2] = useState('')



    return (
        <nav className={style.navbar  }>
            <ul className={style.manu +  style.nav  + style.eventColor }>
                <Link onClick={()=>setState(state===""? manu1 : '')+ setState2('')} ><li className={style.manuLi}> Возможности <img  src={icon} alt=""/>{state}</li></Link>
                <Link onClick={()=>setState2(state2===""? manu2 : '') + setState('')}><li className={style.manuLi}> Ресурсы <img src={icon} alt=""/>{state2}</li></Link>
                <Link to={'/events'} className={style.eventColor} > <li  className={style.eventColor}>События</li></Link>
                <Link to={''} className={style.eventColor}> <li  className={style.eventColor}>Кейсы</li></Link>
            </ul>
        </nav>
    )
}
