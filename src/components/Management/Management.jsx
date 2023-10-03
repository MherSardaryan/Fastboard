import React , {useState} from 'react'
import style from '../blogpage/blogitam/Blockitam.module.css'
import {Link} from "react-router-dom";
import img2 from "../blogpage/blogitam/img/Rectangle 57.png";
import iconsvg from "../Articlespage/img/Vector 5 (7).png";
import footherimg1 from "../Articlespage/img/Rectangle 5.png";
import footherimg2 from "../Articlespage/img/Vector 17.png";
import HeaderBlog from "../blogpage/blogitam/header/HeaderBlog";


export default function Management() {
    const tools = <div className={style.itamTools} >
        <div className={style.topper}>
            <select name="" id="">
                <option value="Версия 1.0">Версия 1.0 <img width={'8px'} src={iconsvg} alt=""/></option>
            </select>
            <img width={'25px'} src="https://bajaj-cobrowse.allincall.in/static/EasyAssistApp/img/close-client.jpg" alt=""
                 onClick={()=>setState(<img width={'30xp'} height={'30px'} src={'https://static.thenounproject.com/png/547171-200.png'} alt="" onClick={()=>setState(state !== tools ? tools : '')}/>)}
            />
        </div>
        <h5>Начало работы</h5>

        <p>Добро пожаловать!</p>
        <p>Как устроен Fastboard?</p>
        <p>Пользователи и их права</p>
        <p>Быстрый старт</p>


        <h5>Панель администратора</h5>

        <p>Пользователи</p>
        <p>Группы проектов</p>
        <h5>Менеджер проектов</h5>
        <h5>Конструктор дашбордов</h5>

    </div>
    const [state,setState] = useState( <img width={'30xp'} height={'30px'} src={'https://static.thenounproject.com/png/547171-200.png'} alt="" onClick={()=>setState(state !== tools ? tools : '')}/>
    )

    return (
        <div className={style.thisblock}>
            <div className={style.burgerTools}>
                {state}
            </div>
          <div>
              <HeaderBlog props={'Руководство'}/>
              <div className={style.itamConTexts}>
                  <img src={img2} alt=""/>
                  <h2>Бюджеты и ценообразование в B2B</h2>
                  <p>B2B-клиентов беспокоит вопрос цены, так же как и в B2С. Однако работать с бюджетами в B2B может быть сложнее, чем с личными бюджетами, потому что они:</p>
                  <ul>

                      <li>зачастую задаются менеджером или другими представителями из управляющего звена. Бюджет зачастую задает не тот, кто зашел к вам на сайт с целью исследовать и купить продукт;</li>
                      <li>согласуются заранее и с трудом изменяются в течение года;</li>
                      <li>требуют нескольких уровней проработки: включают такие элементы, как долгосрочная поддержка или техническое обслуживание наряду с покупкой</li>
                  </ul>
                  <p>Представьте себе следующую ситуацию: B2B-клиент сделал исследование и получил одобрение бюджета, но после разговора с отделом продаж решил, что другое, более дорогое решение будет лучше изначального. На такое дело у него могут отсутствовать полномочия увеличивать бюджет, или для этого может потребоваться, чтобы закрылся финансовый год. Из-за этих сложных бюджетных ограничений. Т.е B2B-клиентам важно знать, что их решение о покупке не приведет к непредвиденным расходам где-то в будущем.</p>
                  <p>Поэтому вам следует ясно демонстрировать цены для B2B-сегмента, чтобы пользователи ощущали прозрачность ваших действий. Фактически, первый сайт, на который они зайдут из поиска покажет им цену, которая уже может <Link >сформировать</Link>  определенные ожидания.</p>
                  <p>Некоторые B2B-сайты всячески стремятся избегать ложных ожиданий и скрывают все цены, тем самым побуждая пользователей "запросить цену" или "связаться с отделом продаж", чтобы их посмотреть — им кажется, что такой подход хорош для вывода клиентов на контакт. Однако, такая стратегия сокрытия цен отпугивает пользователей, потому что:</p>

                  <h2>Рекомендации</h2>
                  <h3>1. Показывайте цену и если цена переменная, предложите общие сценарии ценообразования.</h3>
                  <p>Возможно, цена варьируется по таким причинам, как комплектация или в связи с необходимостью серии переговоров в рамках контракта. Чтобы дать представление о цене, не устанавливая нереалистических ожиданий, покажите распространенные сценарии ценообразования. Например, отображать начальную цену (которую можно повысить в зависимости от требований) или диапазон цен.</p>
                  <h3>2. Объясняйте модель ценообразования: планы, пакеты или уровни обслуживания.</h3>
                  <p>Учтите принцип неприятия потерь, показав пользователям, какие дополнительные функции входят в более дорогие пакеты. Такой подход побуждает людей приобретать немного более дорогой пакет, если у них есть место для маневра в бюджете.</p>
              </div>
              <div className={style.foother}>
                  <ul>
                      <Link>Обзор</Link>
                      <Link>Возможности <img src={iconsvg} alt=""/>     </Link>
                      <Link>Документация</Link>
                      <Link>Демо-версия</Link>
                      <Link>Блог</Link>
                      <Link>Купить</Link>
                  </ul>
                  <p>
                      © 2023 Fastboard
                      <span>+7 (988) 456-78-99</span>
                  </p>
                  <div>
                      <img className={style.footherimg1} src={footherimg1} alt=""/>
                      <img className={style.footherimg2} src={footherimg2} alt=""/>
                  </div>
              </div>
          </div>

        </div>
    )
}
