
    import React ,{useState} from 'react'

    import btnCarusell from './img/Group 626.png'
    // import fone from './img/Vector (22).png'
    // import textimg from './img/Frame (11).png'




export default function Carusell({style ,img}) {
    let i = 0


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
                <div className={style.carusBlock}>
                    <div className={style.carusell}>
                        <button className={style.btn}  onClick={btncontrol}>
                            <img src={btnCarusell} alt=""/>
                        </button>

                        <div className={style.widwCarus}>

                                <img  width={'100%'} src={state} alt=""/>

                        </div>


                        <button className={style.btn2}  onClick={btncontrolPluce} >
                            <img src={btnCarusell} alt=""/>
                        </button>
                    </div>
                </div>
                <div className={style.galerySection}>
                    {
                        img.map(e =>{
                            return  <div className={style.galery }>
                                    <img  height={'100%'} src={e} alt=""/>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
