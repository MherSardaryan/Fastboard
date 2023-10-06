import React from 'react'
import style from './Sendmodal.module.css'

export default function SendModal({props}) {

    return (
<>
        <div className={style.itam} onClick={()=>props("")}>


        </div>
    <div className={style.block} >
        <img onClick={()=>props("")} className={style.x} src={'https://bajaj-cobrowse.allincall.in/static/EasyAssistApp/img/close-client.jpg'} alt=""/>
        <div>
            <h1>Заказать демо</h1>
            <p>Оставьте свои координаты и мы с вами свяжемся в самое ближайшее время</p>
            <form >
            <label htmlFor="Имя и фамилия">Имя и фамилия </label> <br/>
            <input type="text" placeholder={'Василий Пупкин'} required/> <br/>
            <label htmlFor="">Компания</label> <br/>
            <input type="text" placeholder={'Лабуда'} required/> <br/>
            <label htmlFor="">Телефон </label><br/>
            <input type="number" placeholder={'+7 (988) 654-89-78'} required/> <br/>
            <label htmlFor="">Комментарий</label> <br/>
            <input type="text" placeholder={'Звоните срочно!'} required/>
                <div className={style.blockbtn}>
                    <button>Отправить</button>
                </div>
            </form>
        </div>


    </div>
</>
    )
}
//
