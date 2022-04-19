import React from "react";
import reactDom from "react-dom";
import './Header.css';
import Logo from '../img/header/logo.png';
import ComponyInstagram from '../img/header/instagram.png';
import ComponyTelegram from '../img/header/telegram.png';
import ComponyVk from '../img/header/vk-2.png';
import ComponyWhatsapp from '../img/header/whatsapp.png';
import ClockHeader from '../img/header/clock-2.png';
import TelephoneHeader from '../img/header/telephone.png';
import { useState } from "react";
import Modal from "./Modal";

 const Header = () => {


    return (
       <div> 
           
            <div className="contactInfo container">
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt={'logo'}/>
                    </a>
                    <div>
                        <h4>Moscovaqual</h4>
                        <p>Ремонт бытовой техники</p>
                    </div>
                </div>
                <div className="social">
                    <a href="#">
                        <img src={ComponyInstagram} alt={'ComponyInstagram'}/>
                    </a>
                    <a href="#">
                        <img src={ComponyTelegram} alt={'ComponyTelegram'}/>
                    </a>
                    <a href="#">
                        <img src={ComponyVk} alt={'ComponyVk'}/>
                    </a>
                    <a href="#">
                        <img src={ComponyWhatsapp} alt={'ComponyWhatsapp'}/>
                    </a>
                </div>
                <div className="timetable">
                    <div className="timetableClock">
                        <img src={ClockHeader} alt={'ClockHeader'}/>
                        <p>Режим работы</p>
                    </div>
                    <div>
                        <p>ПН-ПТ с 07:00 до 24:00</p>
                        <p>Сб, ВС: с 07:00 до 24:00</p>
                    </div>
                </div>
            <div className="callInfo">
                <div className="telephone">
                    <img src={TelephoneHeader} alt={'TelephoneHeader'}/>
                    <a href="#">+7(495) 777 00 00</a>    
                </div>
                <button className="callBtn" >Заказать звонок</button>    
            </div>
        </div>
    </div>
    );
}

export default Header;