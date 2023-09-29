import React from 'react'
import style from './Controlinterface.module.css'
import img1 from './img/image 67.png'
import img2 from './img/image 66.png'

export default function Controlinterface() {
    return (
        <div className={style.block}>
            <div className={style.rightBlock}>
                <div className={style.rightBlockItam}>
                    <img width={ '31.2% ' } src={img1} alt=""/>
                    <img className={style.imgUp} width={'34%'} src={img2} alt=""/>
                </div>
            </div>
            <div className={style.itam}>
                <div className={style.leftBlock}>
                    <h2>Полный контроль над оформлением <br/> интерфейса</h2>
                    <ul>
                        <li>Настриваемые темы оформления</li>
                        <li>Кастомизация цветовой палитры</li>
                        <li>Продвинутое управление цветом</li>
                        <li>Генератор цветовых наборов</li>
                    </ul>
                    <h3>Соблюдайте фирменный стиль <br/> своей компании во всей аналитике</h3>
                </div>


            </div>
        </div>
    )
}
