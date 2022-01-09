import React from "react";
import './Diagnostics.css';
import Price1Png from '../..//img/price1.png';
import Price2Png from '../..//img/price2.png';

export default function Diagnostics() {
    return (
        <section className="diagnostics">
        <div className="diagnostics-text">
            <h2>Стоимость услуг</h2>
            <p>Диагностика</p>
        </div>
        <div className="diagnostics-img-block">
            <div className="diagnostics-img-all">
                <div className="diagnostics-img">
                    <img src={ Price1Png } alt="./img/price1.png"/>
                </div>
                <div className="diagnostics-img-prise">
                    <h2>0</h2>
                    <p>руб.</p>
                </div>
                <div className="diagnostics-img-block-text">
                    <p>Диагностика при <br/>
                       последующем ремонте</p>
                </div>
            </div>
            <div className="diagnostics-img-all">
                <div className="diagnostics-img">
                    <img src={ Price2Png } alt="./img/price2.png"/>
                </div>
                <div className="diagnostics-img-prise">
                    <h2>400</h2>
                    <p>руб.</p>
                </div>
                <div className="diagnostics-img-block-text">
                    <p>Диагностика без <br/>
                       последующего ремонта</p>
                </div>
            </div>
        </div>
        <div className="diagnostics-text-footer">
            <p>Цены на ремонт</p>
        </div>
    </section>
    );
}