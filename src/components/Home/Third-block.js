import React from "react";
import '../Home/Third-block.css';
import AskpricePng from '../..//img/askprice.png';

export default function ThirdBlock() {
    return (
        <section className="container third-block">
            <div className="third-block-img">
                <img src= { AskpricePng } alt="askprice.png"/>
            </div>
            <div className="third-block-info">
                <h2>Ответьте на вопросы и узнайте точную 
                    стоимость ремонта вашей машинки</h2>
                <p>Мы перезвоним Вам и подробно проконсультируем
                        по всем вопросам по ремонту стиральной машинки</p>
                <button className="third-block-btn">Узнать стоимость</button>
            </div>
        </section>
    );
}