import React from 'react'
import style from './header.module.css'
import logo from   './img/logo.png'
import phone from './img/phone-call.png'
import Navbar from "./Navbar";
export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo} >
                <img width={'161.18px'} src={logo} alt="Logo"/>
            </div>
            <Navbar/>
            <div className={style.tel}>
                <img width={'20px'} src={phone} alt="phone"/>
                <p>(988) 456-78-99</p>
                <button className={style.button}>Демо-тур</button>
            </div>
        </div>
    )
}
