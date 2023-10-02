import React ,{useState} from 'react'
import style from './Case.module.css'
import btnCarusell from './img/Group 597.png'
import fone from './img/Vector (22).png'
import textimg from './img/Frame (11).png'
import linesImg from './img/Frame (10).png'



export default function Case() {
    let i = 0
    const img = [
        <div className={style.widwCarus}>
            <img className={style.textimg} src={textimg} alt=""/>
            <img className={style.linesImg} src={linesImg} alt=""/>
            <img width={'80%'} src={fone} alt=""/>
        </div>,
        <img src="https://media.istockphoto.com/id/1190671385/vector/grunge-black-background.jpg?s=612x612&w=0&k=20&c=p72Xip_eITl98rdfuslNyyNXc66TFtxPOHAMA1ck7yY=" alt=""/>,
        <img  src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40697/FreevectorWhite-BackgroundAS0821_generated.jpg" alt=""/>,

    ]

    const[state,setState] = useState(img[i])

    function btncontrolPluce(){
        i === img.length-1 ? i = 0 : i++
       return  setState(img[i])

    }

    function btncontrol(){
        i === 0 ? i = img.length-1 : i--
        return  setState(img[i])
    }
    setTimeout(btncontrolPluce,5000)
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
