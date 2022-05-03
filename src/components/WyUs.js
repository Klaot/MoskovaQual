import React from "react";
import '../components/WyUs.css';
import StarPng from '../img/guarantee/star.png';
import QualityPng from '../img/quality.png';
import Guarantee2Png from '../img/guarantee2.png';

export default function WyUs() {
    return (
        <section className="whyUs container">
        <div className="whyUsGarant">
            <h3 >100% ГАРАНТИЯ КАЧЕСТВА</h3>
        </div>
        <div className="whyUsAll containerTwo">
            <h3 className="whyUsAllH3">Почему МЫ?</h3>
            <div className="whyUs-item">
                <img src={ StarPng } alt="star.png"/>
                <p>Работаем без выходных и праздников</p>
            </div>
            <div className="whyUs-item">
                <img src={ StarPng } alt="star.png"/>
                <p>Отличные цены за ремонт в Москве</p>
            </div>
            <div className="whyUs-item">
                <img src={ StarPng } alt="star.png"/>
                <p>Мы устанавливаем только оригинальные запчасти</p>
            </div>
            <div className="whyUs-item">
                <img src={ StarPng } alt="star.png"/>
                <p>Принимаем в ремонт все модели и устраняем<br/> 
                    неисправности любой сложности</p>
            </div>  
        <div>
            <h3>Сервисный центр «Moscowqual»<br/>
                предоставляет клиентам сразу две гарантии:</h3>
            <div>
                <div className="whyUs-repair-info">
                    <div className="whyUs-repair-img-one whyUs-repair-margin-img-one">
                    <img src={ QualityPng } alt="quality.png"/>
                    </div>
                    <div className="whyUs-repair-text">
                        <h4>Гарантия на ремонт до 2-х лет</h4>
                    </div>
                </div>
            </div>
            <div>
                <div className="whyUs-repair-info">
                    <div className="whyUs-repair-img-one whyUs-repair-margin-img-one">
                        <img src={ Guarantee2Png } alt="guarantee2.png"/>
                    </div>
                    <div className="whyUs-repair-text">
                        <h4>Гарантия на запчасти до 2-х лет</h4>
                    </div>
                </div>
            </div>
        </div>  
        </div> 
    </section>
    );
}