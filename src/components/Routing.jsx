import React  from 'react'
import {Route, Routes} from "react-router-dom";
import Hompage from "./hompage/Hompage";
import Events from "./events/Events";
import CardPage from "./CardPage/CardPage";
import date from './events/eventsList/index'
import Blog from "./blogpage/Blog";
import Articlespage from "./Articlespage/Articlespage";

export default function Routing() {




    return (

<Routes>

    <Route path={'/'} element={<Hompage />} />
    <Route path={'/blog'} element={<Blog />} />
    <Route path={'/arcticles'} element={<Articlespage />} />
    <Route path={'/events'} element={<Events />}/>
    {date.map(e => {
        return <Route key={`route${e.id}`} path={`/event${ e.id}` } element={<CardPage props={e}/>}/>

    })}

    {/*<Route path={`/event${e.title}`} element={<CardPage props={''}/>} />*/}
</Routes>
    )
}

