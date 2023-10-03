import React , {useState} from 'react'
import style from "./header.module.css";
import {Link} from "react-router-dom";
import icon from './img/Vector 5 (5).png'

const manu1_in = <ul className={style.manu1_in}>
    <Link to={''}><li>Вэбинары</li> </Link>
    <Link to={''}><li>Курсы</li> </Link>
    <Link to={''}><li>Уроки</li> </Link>
</ul>
const manu1_in1 = <ul className={style.manu1_in}>
    <Link to={'/arcticles'}><li>Статьи</li> </Link>

</ul>
const manu1 = <ul className={style.modalManu}>
    <Link to={'/admin'}><li>Документация</li></Link>
    <Link ><li className={style.manuLi}>Обучение {manu1_in}</li></Link>
    <Link to={'/blog'}><li className={style.manuLi}>Блог {manu1_in1}</li></Link>
</ul>
const manu2 = <ul className={style.modalManu}>
    <Link ><li>Вэбинары</li></Link>
    <Link  ><li> Митапы</li></Link>
    <Link ><li> Конфы</li></Link>
</ul>

export default function Navbar() {
    const [madalOpen,setModalCloce] = useState('')
    const [state,setState] = useState('')
    const [state2,setState2] = useState('')



    return (
        <nav className={style.navbar  }>
            <ul className={style.manu +  style.nav  }>
                <Link onClick={()=>setState(state===""? manu1 : '')+ setState2('') + setModalCloce(<div className={style.modalOpen} onClick={()=>setState('')+setModalCloce('')}></div>)} ><li className={style.modLi}> Возможности <img  src={icon} alt=""/>{state}</li></Link>
                <Link onClick={()=>setState2(state2===""? manu2 : '') + setState('') + setModalCloce(<div className={style.modalOpen} onClick={()=>setState2('')+setModalCloce('')}></div>)}><li className={style.modLi}> Ресурсы <img src={icon} alt=""/>{state2}</li></Link>
                <Link to={'/events'} className={style.eventColor} > <li>События</li></Link>
                <Link to={''} className={style.eventColor}> <li >Кейсы</li></Link>
            </ul>
            {madalOpen}
        </nav>
    )
}
