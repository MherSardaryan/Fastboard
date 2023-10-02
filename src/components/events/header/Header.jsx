import React  from 'react'
import style from './header.module.css'
import logo from   './img/logo2.png'
import phone from './img/phone-call.png'
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
export default function Header() {


    return (
        <div className={style.header}>
            <div className={style.logo} >
               <Link to={'/'}> <img width={'161.18px'} src={logo} alt="Logo"/></Link>
            </div>
            <Navbar  />
            <div className={style.burger} >
                <div className={style.line }></div>
                <div className={style.line1 }></div>
                <div className={style.line2 }></div>
            </div>
            <div className={style.tel}>
                <img width={'20px'} src={phone} alt="phone"/>
                <p className={style.eventColor}>+7 (988) 456-78-99</p>
                <button className={style.button}>Демо-тур</button>
            </div>
        </div>
    )
}
