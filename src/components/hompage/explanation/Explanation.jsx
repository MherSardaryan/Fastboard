import React from 'react'
import style from './Explanation.module.css'
import line from './img/Vector 9.png'
export default function Explanation() {
    return (
        <div className={style.block}>
            <h2 className={style.title}>Что такое Fastboard?</h2>
            <p className={style.text}>BI-система класса self-service. Позволяет строить дашборды и аналитику, выявлять проблемы, прогнозировать результаты, принимать правильные решения и улучшать процессы. Визуализировать сложные данные и делать их понятными</p>
            <div className={style.line}>
                <img width={'87px'} src={line} alt=""/>
            </div>
            <h3 className={style.textH2}>Мы разработали особый подход, чтобы сделать это<br/>
                максимально быстро!</h3>
            <div className={style.backgraund}></div>
        </div>
    )
}
