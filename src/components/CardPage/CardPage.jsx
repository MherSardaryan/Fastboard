import React, {useState} from 'react'
import Header from "../hompage/header/Header";
import style from './CardPage.module.css'
import line from './img/Rectangle 66 (1).png'
import Carusell from "../ui/carusell/Carusell";
import caruselStyle from './Carusell.module.css'
import user1 from './img/image 81.png'
import user2 from './img/image 80.png'
import foother from './img/Rectangle 5 (1).png'
import chatImg from './img/Group 600.png'
import ModalChat from "../ui/modal/ModalChat";

export default function CardPage({props}) {
    const [state,setState] = useState('')
    return (
        <div className={style.block}>
            <div className="header">
                <Header />
            </div>
            <div>
                <div className={style.bannerTop}>
                    <img  src={props.img} alt=""/>
                    <div>
                       <h1>{props.title} в Москве</h1>
                    </div>
                    <img className={style.line} src={line} alt=""/>
                </div>
                <div className={style.container}>
                    <button>Принять участие</button>
                    <p className={style.thime}>{props.date.day} {props.date.month} в {props.date.time}</p>
                    {/*oll information set from props.date*/}
                    <div className={style.information}>
                        <p>Что такое процессный подход и где его можно применять? Как в этом помогают технологии? Бизнес-консультант Михаил Рыбаков и эксперты PIX Robotics дадут ответы на эти вопросы, а также представят PIX Процессную студию — компонент единой платформы для управления бизнес-процессами PIX Процессы.</p>
                    </div>
                    <h3>Вебинар будет полезен</h3>
                    <ul>
                        <li>Руководителям компаний</li>
                        <li>Руководителям функциональных блоков</li>
                        <li>Бизнес-аналитикам</li>
                        <li>Специалистам по процессному управлению</li>
                    </ul>
                    <h3 className={style.ulunder}>Программа вебинара</h3>
                    <ul>
                        <li>1. Суть процессного подхода: как увидеть сквозные процессы в своей организации, описать их и оптимизировать</li>
                        <li>2. Платформа PIX Процессы: какие задачи решает и как делает управление процессами удобнее и эффективнее</li>
                        <li>3. PIX Процессная студия: как моделировать и визуализировать бизнес-процессы</li>
                        <li>4. Демонстрация PIX Процессной студии</li>
                        <li>5. Вопросы и ответы</li>
                    </ul>
                </div>
                <Carusell  style={caruselStyle} img={props.urls}/>
                <div className={style.spicers}>
                    <h3>Спикеры</h3>
                    <div className={style.userInfo}>
                        <img width={'100px'} src={user1} alt=""/>
                        <div className={style.info}>
                            <h2>Михаил Рыбаков</h2>
                            <p>Бизнес-консультант, автор деловых бестселлеров</p>
                        </div>
                    </div>
                    <div className={style.userInfo}>
                        <img width={'100px'} src={user2} alt=""/>
                        <div className={style.info}>
                            <h2>Николай Буланов</h2>
                            <p>Директор по консалтингу</p>
                        </div>
                    </div>

                    <div className={style.register}>
                        <h2>Зарегистрироваться</h2>
                        <p>Заполните заявку для регистрации на мероприятие</p>
                        <button>Заполнить заявку</button>
                    </div>
                    <div className={style.potos}>
                        {
                            props.urls.map(e=>{
                                return <div className={style.photo}><img  height={'100%'} src={e} alt=""/></div>
                            })
                        }
                    </div>

                </div>
                <img className={style.chat} src={chatImg} alt="" onClick={()=>setState(state ===  '' ? <ModalChat /> : '')}/>
        </div>
            <img width={'100%'} src={foother} alt=""/>
            {/*<Case props={'true'}/>*/}
            {state}
        </div>
    )
}
