import React, {useState} from 'react'
import style from './Sendmodal.module.css'

export default function SendModal({props}) {
    const [username,setUsername] = useState('')
    const [usernameEror , setUsernameError] =useState('')
    const date = {
        name:username.split(' ')[0],
        surname:username.split(' ')[1],
    }
    function userType (){
        setUsernameError('')
        if(username.split(' ').length < 2){
            setUsernameError('пожалуйста напишите полное имя и фамилия')
        }
        username.split('').forEach(e=>{

        if(e  === '1'||e==='2'||e==="3"||e==="4"||e==="5" ||e==="6" ||e==="7" ||e==="8" ||e==="9" ||e === '0'  ) {

         return  setUsernameError('поле заполнено некорректно')
        }else  return  ''


    })

        console.log(date)
    }
function send(){
    userType()
}

    return (
<>
        <div className={style.itam} onClick={()=>props("")}>


        </div>
    <div className={style.block} >
        <img onClick={()=>props("")} className={style.x} src={'https://bajaj-cobrowse.allincall.in/static/EasyAssistApp/img/close-client.jpg'} alt=""/>
        <div>
            <h1>Заказать демо</h1>
            <p>Оставьте свои координаты и мы с вами свяжемся в самое ближайшее время</p>
            <form onClick={send}>
            <label htmlFor="Имя и фамилия">Имя и фамилия </label> <br/>
            <input type="text" placeholder={'Василий Пупкин'}   onChange={(e)=>setUsername(e.target.value)}  value={username}  required/> <br/>
                <p className={style.error}>{usernameEror}</p>
            <label htmlFor="">Компания</label> <br/>
            <input type="text" placeholder={'Лабуда'} required/> <br/>
            <label htmlFor="">Телефон </label><br/>
            <input type="number" placeholder={'+7 (988) 654-89-78'} required/> <br/>
            <label htmlFor="">Комментарий</label> <br/>
            <input type="text" placeholder={'Звоните срочно!'} required/>
                <div className={style.blockbtn}>
                    <button >Отправить</button>
                </div>
            </form>
        </div>


    </div>
</>
    )
}
//
