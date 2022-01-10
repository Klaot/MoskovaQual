import React from "react";
import reactDom from "react-dom";
import  render  from "react-dom";
import  Header  from "../components/Header";
import QualityBlock from "../components/QualityBlock";
import ThirdBlock from "../components/Home/Third-block";
import Diagnostics from "../components/Home/Diagnostics";
import './Home.css';
import SmallPrice from "../components/Home/SmallPrice";
import Breakdowns from "../components/Home/Breakdowns";
import Urgentcall from "../components/Urgentcall";

function Home() {
    return (
        <div>
        <div class="container oneSection">
            <div class="oneSectionInfo containerTwo">
                <h1>Ремонт стиральных машин<br/> 
                    в Москве</h1>
                    <ul>
                        <li>Отличные цены на запчасти</li>
                        <li>Фирменная гарантия на все работы</li>
                        <li>Ремонт в день обращения</li>
                    </ul>
                <button class="headerBtn">Заказать ремонт</button>
            </div>
        </div>
        <QualityBlock />
        <ThirdBlock />
        <Diagnostics />
        <SmallPrice />
        <Breakdowns />
        <Urgentcall />
        
        </div>
    );
}

export default Home;