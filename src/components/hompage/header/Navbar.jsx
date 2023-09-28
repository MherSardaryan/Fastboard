import React from 'react'
import style from "./header.module.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <ul className={style.manu +  style.nav}>
                <Link to={''}><li> <select name=""  className={style.manu}>
                    <option value="1">Возможности</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select> </li></Link>
                <Link to={''}><li> <select name=""  className={style.manu}>
                    <option value="1">Ресурсы</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select></li></Link>
                <Link to={''}> <li>События</li></Link>
                <Link to={''}> <li>Кейсы</li></Link>
            </ul>
        </nav>
    )
}
