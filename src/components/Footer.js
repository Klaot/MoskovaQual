import React from "react";
import '../components/Footer.css';
import Logo from '../img/header/logo.png';
import ComponyInstagram from '../img/header/instagram.png';
import ComponyTelegram from '../img/header/telegram.png';
import ComponyVk from '../img/header/vk-2.png';
import ComponyWhatsapp from '../img/header/whatsapp.png';
import ClockHeader from '../img/header/clock-2.png';
import TelephoneHeader from '../img/header/telephone.png';

export default function Footer() {
    return (
        <footer class="container footer">
            <div class="footer-Info container">
                <div class="logo">
                    <a href="#">
                        <img src= {Logo} alt="logo.png"/>
                    </a>
                    <div>
                        <h4>MoscoveQual</h4>
                        <p>Ремонт бытовой техники</p>
                    </div>
                </div>
                <div class="social">
                    <a href="#">
                        <img src= { ComponyInstagram } alt="instagram.png"/>
                    </a>
                    <a href="#">
                        <img src= { ComponyTelegram } alt="telegram.png"/>
                    </a>
                    <a href="#">
                        <img src= { ComponyVk } alt="vk-2.png"/>
                    </a>
                    <a href="#">
                        <img src= { ComponyWhatsapp } alt="whatsapp.png"/>
                    </a>
                </div>
                <div class="timetable">
                    <div class="timetableClock">
                        <img src= { ClockHeader } alt= "clock-2.png"/>
                        <p>Режим работы</p>
                    </div>
                    <div>
                        <p>ПН-ПТ с 07:00 до 24:00</p>
                        <p>Сб, ВС: с 07:00 до 24:00</p>
                    </div>
                </div>
                <div class="callInfo">
                    <div class="telephone">
                        <img src= { TelephoneHeader }  alt="telephone.png"/>
                        <a href="#">+7(495) 755 69 83</a>    
                    </div>
                    <button class="callBtn">Заказать звонок</button>    
                </div>
            </div>
            <div class="footer-copirate">
                <p>© 2021 sitename.ru <br/>
                    Все права защищены</p>
            </div>
        </footer>
    );
}