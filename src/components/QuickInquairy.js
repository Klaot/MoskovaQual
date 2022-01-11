import React from "react";
import '../components/QuickInquairy.css';

export default function QuickInquairy() {
    return (
        <section class="quick-inquiry container">
            <div class="quick-inquiry-heading">
                <h3>НЕ ТЕРЯЙТЕ ВРЕМЯ<br/>
                    ПОЛУЧИТЕ СКИДКУ 10%</h3>
            </div>
                <p class="quick-inquiry-p">Мы работаем в Москве и в Московской области</p>

            <form class="urgentcall-form">
                    <h3>КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА И<br/> 
                        РАССЧЕТ СТОИМОСТИ РЕМОНТА</h3>
                    <input type="tel" placeholder="ВАШ НОМЕР ТЕЛЕФОНА"/>
                    <button class="urgentcall-form-btn">Перезвоните мне</button>
                    <p>Мастер перезвонит в течение 15 мин</p>
            </form> 
        </section>
    );
}