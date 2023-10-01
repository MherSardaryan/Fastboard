import React from 'react'
import Topevent from "./Topevents/Topevent";
import style from './Navbvar.module.css'
import EventsList from "./eventsList/EventsList";
import Footherevent from "./Foother/Footherevent";
import Header from "./header/Header";
export default function Events() {
    return (
        <div className={style.block}>
            <Header />
            <Topevent />
            <EventsList />
            <Footherevent />
        </div>
    )
}
