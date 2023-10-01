import React from 'react'
import style from './EventsList.module.css'
import date from './index'
import backImg from './img/Rectangle 66 (1).png'
import orange from './img/Vector 150.png'
import bottom from './img/bottom.png'
import chatImg from './img/Group 600.png'
import ModalChat from "../../ui/modal/ModalChat";
import {Link} from "react-router-dom";



export default function EventsList() {
    const [state,setState] = React.useState('')


    return (
        <div className={style.block}>
            <img width={'100%'} src={backImg} alt=""/>
           <div className={style.container}>
                <p>Несколько вводных предложений о разделе. Пока тут будет такой заголовок. Когда появятся рубрики в меню будет выпадашка с ними, а тут выведем заголовок рубрики. Либо можно вывести сю да фильтр по темам. </p>
                <button className={style.btn}>Предстоящие</button>
                <button>Прошедшие</button>
               <Link  to={`/event${date[0].id}`} > <div className={style.cards}>
                    <img width={'100%'} src={date[0].img} alt=""/>
                    <div className={style.banner}>

                            <div className={style.mdt }>
                            <p className={style.day}>{date[0].date.day}</p>
                            <p className={style.month}>{date[0].date.month}</p>
                            <p className={style.thime}>в {date[0].date.time}</p>
                            </div>

                        <div className={style.text}>
                            <h2 className={style.title}>{date[0].title}</h2>
                            <p className={style.info}>{date[0].info}</p>
                        </div>
                    </div>
                </div>
               </Link>
                {
                    date.map((e ,i) =>{

                   if( i > 0 && i<6 && i !==3 )  {
                       return<Link to={`/event${e.id}`}> <div className={style.card}>
                           <div className={style.mdtCard}>
                               <p className={style.dayCard}>{e.date.day}</p>
                               <p className={style.monthCard}>{e.date.month}</p>
                               <p className={style.thimeCard}>в {e.date.time}</p>
                           </div>
                           <img height={'180px'} src={e.img} alt=""/>
                           <div className={style.textCard}>
                               <h2 className={style.titleCard}>{e.title}</h2>
                               <p className={style.infoCard}>{e.info}</p>
                           </div>
                       </div> </Link>
                   } else if(i === 3 ){
                       return <div className={style.orange}>
                           <img className={style.orangeImg} src={orange} alt=""/>
                       <div className={style.card}>


                                   <div className={style.mdtCard}>
                                       <p className={style.dayCardCrnter}>{e.date.day}</p>
                                       <p className={style.monthCardCrnter}>{e.date.month}</p>
                                       <p className={style.thimeCardCrnter}>в {e.date.time}</p>
                                   </div>
                                   <img height={'180px'} src={e.img} alt=""/>
                                   <div className={style.textCard}>
                                       <h2 className={style.titleCard}>{e.title}</h2>
                                       <p className={style.infoCard}>{e.info}</p>
                                   </div>

                       </div>
                           <div className={style.orangeDivBtn}>
                               <button className={style.orangeBtn}>Подробнее</button>
                           </div>

                           <img className={style.orangeImg1} src={orange} alt=""/>

                       </div>
                   } else {
                       return ''
                   }
                    })
                }

            </div>
            <img className={style.chat} src={chatImg} alt="" onClick={()=>setState(state ===  '' ? <ModalChat /> : '')}/>

            <img className={style.bottomImg} width={'100%'} src={bottom} alt=""/>
            {state}
        </div>
    )
}
