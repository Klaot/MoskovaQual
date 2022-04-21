import React from "react";
import '../Home/Third-block.css';
import AskpricePng from '../..//img/askprice.png';
import { Link } from "react-router-dom";

export default function ThirdBlock() {
    return (
        <section className="container third-block">
            <div className="third-block-img">
                <img src= { AskpricePng } alt="askprice.png"/>
            </div>
            <div className="third-block-info">
                <h2>Узнайте стоимость ремонта вашей машинки, ознакомившись с нашим прайсом</h2>
                <p>Мы перезвоним Вам и подробно проконсультируем
                        по всем вопросам по ремонту стиральной машинки.</p>
                <Link to='/price' className="third-block-btn">Узнать стоимость</Link>
            </div>
        </section>
    );
}