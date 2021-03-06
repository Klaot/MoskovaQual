import React from "react";
import './ServicesAndPrices.css';
import QualityBlock from "../../components/QualityBlock";
import QuickInquairy from "../../components/QuickInquairy";
import Reviews from "../../components/Reviews";
import Urgentcall from "../../components/Urgentcall";
import WyUs from "../../components/WyUs";
import ModalShowBtn from "../../components/ServicesAndPrices/ModalShowBtn";
import Price1 from "../../components/ServicesAndPrices/Price1";
import Price2 from "../../components/ServicesAndPrices/Price2";
import Price3 from "../../components/ServicesAndPrices/Price3";


export default function ServicesAndPrices() {
    return (
        <div>
            <div className="container SerAndPrices mobile-style">
                <div className="containerTwo">
                    <div className="SerAndPrices-header">
                        <h1>Наши услуги и цены</h1>
                        <p>Если ваша стиральная машина вышла из строя, сервисный центр 
                        «Moscowqual» оперативно устранит неисправность. Мастерская оказывает 
                        услуги во всех районах Москвы и ближнего Подмосковья.
                        Ремонт осуществляется на дому специалистами со стажем не менее 5 лет.
                        Мастер отремонтирует вашу машинку в течение 24-х часов с 
                        момента обращения или в любой другой день, который удобен для вас.
                        После ремонта вам будет выдана квитанция с гарантийными обязательствами
                        сроком до 2 лет.</p>
                    </div>
                </div>
            </div>
            <QualityBlock />
            <div className="containerTwo SerAndPrices-price-btn">
                <ModalShowBtn />
            </div>
            <div className="container ">
                <div className="containerTwo">
                    <div className="SerAndPrices-price-header">
                        <h1>Прайс-лист на услуги</h1>
                        <p>Точная стоимость ремонта стиральной машины зависит от ее модели и вида неисправности.
                        Специалисту необходимо выполнить диагностику, прежде чем рассчитать цену.
                        Вот расценки на наши услуги.</p>
                        <p>Цены в таблице только за ремонтные работы, запчасти и 
                        комплектующие оплачиваются дополнительно.</p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="containerTwo">
                    <div className="SerAndPrices-price-free">
                        <h3>Выезд мастера и диагностика — БЕСПЛАТНО *</h3>
                        <p>* В случае отказа от ремонта или его нецелесообразности,
                            требуется оплатить 400 рублей за выезд специалиста и диагностику.
                            За ложный вызов взимается оплата в размере 1000 руб.</p>    
                    </div>
                </div>
            </div>
            <Price1 />
            <Price2 />
            <Price3 />
            <Urgentcall />
            <WyUs />
            <Reviews />
            <QuickInquairy />
        </div>
    );
}