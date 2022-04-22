import React from "react";
import '../..//src/components/Urgentcall.css';
import StarPng from '../img/urgentcall/star.png';

export default function Urgentcall() {
    return (
        <section className="urgentcall container">

            <div className="urgentcallQuestion">
                <h3>НЕ ЗНАЕТЕ ЧТО СЛОМАЛОСЬ?<br/>
                <span>СРОЧНЫЙ ВЫЗОВ МАСТЕРА НА ДОМ</span></h3>
            </div>

            <p>Качественно устраним любые поломки вашей стиральной машины</p>

            <div className="urgentcall-tel-all">
                    <div className="urgentcall-quality"> 
                        <div className="urgentcall-quality-item">
                            <img src={ StarPng } alt="star.png"/>
                            <h3>Быстро</h3>
                        </div>
                        <div className="urgentcall-quality-item">
                            <img src={ StarPng } alt="star.png"/>
                            <h3>Дешево</h3>
                        </div>
                        <div className="urgentcall-quality-item">
                            <img src={ StarPng } alt="star.png"/>
                            <h3>Качественно</h3>
                        </div>
                        <div className="urgentcall-tel-block">
                            <h3>Прямой телефон</h3>
                            <div className="urgentcall-tel">
                                <h1>+7(495) 777 00 00</h1>
                            </div>
                        </div>
                    </div>
     
                    <form className="urgentcall-form">
                            <h3>КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА И<br/> 
                                РАССЧЕТ СТОИМОСТИ РЕМОНТА</h3>
                             <input type="tel" placeholder="ВАШ НОМЕР ТЕЛЕФОНА"/>
                            <button className="urgentcall-form-btn">Перезвоните мне</button>
                            <p>Мастер перезвонит в течение 15 мин</p>
                    </form>                    
            </div>
    </section>
    );
}