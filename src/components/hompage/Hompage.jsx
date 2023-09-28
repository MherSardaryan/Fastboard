import React from 'react'
import Initro from "./initro/Initro";
import Explanation from "./explanation/Explanation";
import Utility from "./Utility/Utility";

export default function Hompage() {
    return (
        <div>
            <Initro />
            <Explanation />
            <Utility />
        </div>
    )
}
