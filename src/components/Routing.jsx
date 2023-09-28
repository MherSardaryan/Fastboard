import React from 'react'
import {Route, Routes} from "react-router-dom";
import Hompage from "./hompage/Hompage";

export default function Routing() {
    return (
<Routes>
    <Route path={'/'} element={<Hompage />} />
</Routes>
    )
}
