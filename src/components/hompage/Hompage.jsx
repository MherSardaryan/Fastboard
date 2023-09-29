import React from 'react'
import Initro from "./initro/Initro";
import Explanation from "./explanation/Explanation";
import Utility from "./Utility/Utility";
import Prototyping from "./prototyping/Prototyping";
import Controlinterface from "./ control interface/Controlinterface";
import Workingwithdata from "./ Working with data/ Workingwithdata";
import Case from "./case/Case.jsx";

export default function Hompage() {
    return (
        <div>
            <Initro />
            <Explanation />
            <Utility />
            <Prototyping />
            <Controlinterface />
            <Workingwithdata />
            <Case />
        </div>
    )
}
