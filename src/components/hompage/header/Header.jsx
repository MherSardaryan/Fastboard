import React ,{useState} from 'react'
import style from './header.module.css'
import logo from   './img/logo.png'
import phone from './img/phone-call.png'
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import SendModal from "../../ui/sndmodal/SendModal";



export default function Header() {
    const [state,setState] = useState('');
    const [whitelogo , blacklogo] = useState(logo)
    const [modalMobailBurgger,sendModalMobailBurgger] = useState('')
    const [sendBlock , setSendBlock] = useState('')

    const modalBurder =<div className={style.modalBurger} >
        <Navbar props={setState} logo={blacklogo}/>
        <div className={style.modalBurgerBack}  onClick={()=>sendModalMobailBurgger('')}>

        </div>
    </div>

    return (
        <div className={style.header}>
            <div className={style.logo} >
                <Link to={'/'} ><img  src={whitelogo} alt="Logo"/></Link>
            </div>
                <div className={style.burger} onClick={()=>sendModalMobailBurgger(modalBurder)}>
                    <div className={style.line }></div>
                    <div className={style.line1 }></div>
                    <div className={style.line2 }></div>
                </div>
            <div className={style.navbarblocl}>
                <Navbar props={setState} logo={blacklogo}/>
            </div>

            <div className={style.tel}>
                <img width={'20px'} src={phone} alt="phone"/>
                <p className={state}>(988) 456-78-99</p>
                <button className={style.button} onClick={()=>setSendBlock(<SendModal props={setSendBlock} /> )}>Демо-тур</button>
            </div>
            {sendBlock}
            {modalMobailBurgger}
        </div>
    )
}
//onClick={ <Navbar props={''} logo={blacklogo}/>