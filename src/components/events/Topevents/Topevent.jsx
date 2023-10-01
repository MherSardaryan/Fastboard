import React from 'react'
import {Link} from "react-router-dom";
import img from '../img/Vector 142.png'
import  style from './Topevents.module.css'
export default function Topevent() {
    return (
        <div className={style.block}>
            <h1>События</h1>
            <ul className={style.ul}>
                <Link to={''} >
                <li>Главная</li>
                </Link>
                    <li><img  src={img} alt=""/> </li>
                <Link to={''}>
                    <li>События</li>
                </Link>
            </ul>
        </div>
    )
}
