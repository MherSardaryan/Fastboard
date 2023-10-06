import React from 'react'
import Topevent from "./Topevents/Topevent";
import style from './Navbvar.module.css'
import EventsList from "./eventsList/EventsList";
import Footherevent from "./Foother/Footherevent";
// import Header from "./header/Header";
import Header from "../hompage/header/Header";
import topimage from '../blogpage/img/Rectangle 4.png'
export default function Events() {
    return (
        <div className={'container'}>
            <div className={style.block}>
                <img className={style.topimage} src={topimage} alt=""/>
                <div className="header">
                    <Header  props={'black'}/>
                </div>
                <Topevent />
                <EventsList />
                <Footherevent />
            </div>
        </div>

    )
}
