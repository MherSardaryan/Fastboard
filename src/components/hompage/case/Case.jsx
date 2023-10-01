import React ,{useState} from 'react'
import style from './Case.module.css'
import btnCarusell from './img/Group 597.png'
import fone from './img/Vector (22).png'
import textimg from './img/Frame (11).png'
import linesImg from './img/Frame (10).png'


let i = 0
export default function Case() {

    const img = [
        <div className={style.widwCarus}>
            <img className={style.textimg} src={textimg} alt=""/>
            <img className={style.linesImg} src={linesImg} alt=""/>
            <img width={'80%'} src={fone} alt=""/>
        </div>,
        <img className={style.linesImg} src={linesImg} alt=""/>,
        <img width={'80%'} src={fone} alt=""/>,

    ]

    const[state,setState] = useState(img[i])
    function btncontrolPluce(){
        i === img.length-1 ? i = 0 : i++
       return  setState(img[i])
    }
    setTimeout( btncontrolPluce,4000)
    function btncontrol(){
        i === 0 ? i = img.length-1 : i--
        return  setState(img[i])
    }
    return (
        <div className={style.block}>
            <h2 className={style.title}>Кейсы</h2>
            <div className={style.carusell}>
                <button className={style.btn}  onClick={btncontrol}>
                    <img src={btnCarusell} alt=""/>
                </button>

                <div className={style.widwCarus}>
                    {state}
                </div>


                <button className={style.btn2}  onClick={btncontrolPluce} >
                    <img src={btnCarusell} alt=""/>
                </button>
            </div>
            <div className={style.backFone}>
                <div className={style.backFonetop}></div>
                <div className={style.backFonebottom}></div>
            </div>
        </div>
    )
}
