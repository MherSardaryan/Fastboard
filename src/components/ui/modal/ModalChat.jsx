import React from 'react'
import style from './ModalChar.module.css'
import avatar from './img/Group 604.png'
export default function ModalChat() {
    return (
        <div className={style.block}>
            <div className={style.header}>
                <img src={avatar} alt=""/>
                <div className={style.info}>
                    <h3>Андрей</h3>
                    <h4>Старший чат-бот</h4>
                </div>
            </div>
            <div className={style.chatBlock}>

            </div>
        </div>
    )
}
