import React from "react";
import reactDom from "react-dom";
import  render  from "react-dom";
import QualityBlock from "../../components/QualityBlock";
import ThirdBlock from "../../components/Home/Third-block";
import Diagnostics from "../../components/Home/Diagnostics";
import './Home.css';
import SmallPrice from "../../components/Home/SmallPrice";
import Breakdowns from "../../components/Home/Breakdowns";
import Urgentcall from "../../components/Urgentcall";
import WyUs from "../../components/WyUs";
import Reviews from "../../components/Reviews";
import QuickInquairy from "../../components/QuickInquairy";

function Home() {
    return (
        <div>
        <div className="container oneSection">
            <div className="oneSectionInfo containerTwo">
                <h1>Ремонт стиральных машин<br/> 
                    в Москве</h1>
                    <ul>
                        <li>Отличные цены на запчасти</li>
                        <li>Фирменная гарантия на все работы</li>
                        <li>Ремонт в день обращения</li>
                    </ul>
                <button className="headerBtn">Заказать ремонт</button>
            </div>
        </div>
        <QualityBlock />
        <ThirdBlock />
        <Diagnostics />
        <SmallPrice />
        <Breakdowns />
        <Urgentcall />
        <WyUs />
        <Reviews />
        <QuickInquairy />
        
        </div>
    );
}

export default Home;