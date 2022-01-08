import React from "react";
import '../components/QualityBlock.css';
import MinutesPng from '../img/60-minutes.png';
import InteractivePng from '../img/interactive.png';
import QualityPng from '../img/quality.png';
import Guarantee2Png from '../img/guarantee2.png';


export default function QualityBlock() {
    return(
        <section className="quality containerTwo">
        <div className="qualityItem">
            <div className="guaranteeAll">
                <div className="guarantee">
                    <img src={ MinutesPng } alt="60-minutes.png"/>
                </div>
                <p>Выезд мастера в 
                    течение 60 мин.</p>
            </div>
        </div>
        <div className="qualityItem">
            <div className="guaranteeAll">
                <div className="guarantee">
                    <img src={ InteractivePng } alt="interactive.png"/>
                </div>
                <p>Бесплатная экспресс-
                    диагностика</p>
            </div>
        </div>
        <div className="qualityItem">
            <div className="guaranteeAll">
                <div className="guarantee">
                    <img src={ QualityPng } alt="quality.png"/>
                </div>
                <p>Ремонт оригинальными
                    комплектующими</p>
            </div>
        </div>
        <div className="qualityItem">
            <div className="guaranteeAll">
                <div className="guarantee">
                    <img src={ Guarantee2Png } alt="Guarantee2Png"/>
                </div>
                <p>Гарантия каждому 
                    владельцу до 2-х лет</p>
            </div>
        </div>
    </section>
    ); 
}