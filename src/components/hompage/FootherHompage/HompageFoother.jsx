import React from 'react'
import logo from './img/logo.png'
import style from './HompageFoother.module.css'
export default function HompageFoother() {
    return (
        <div className={style.footer}>
            <img src={logo} alt=""/>
            <p className={style.text}>Fastboard 2023 все права защищены что-то такое</p>
        </div>
    )
}
