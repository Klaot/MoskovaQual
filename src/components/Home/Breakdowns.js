import React from "react";
import '../..//components/Home/Breakdowns.css';
import Group1Png from '../..//img/repair/Group1.png';
import WashingPng from '../..//img/repair/washing.png';
import WaterDropPng from '../..//img/repair/water-drop.png';
import Group2Png from '../..//img/repair/Group2.png';
import Group3Png from '../..//img/repair/Group3.png';
import MinsSvg from '../..//img/repair/25mins.svg';

export default function Breakdowns() {
    return (
        <div>
        <div className="repairH3 containerTwo">
            <h3>Выполняем срочный ремонт за <span>25 МИНУТ</span></h3>  
        </div>
         <section className="breakdowns containerBreack">
         <div className="repair">
                 <div className="repair-info">
                     <div className="repair-img repair-margin-img">
                         <img src={ Group1Png } alt="Group1.png"/>
                     </div>
                     <div className="repair-text">
                         <h4>Не включается стиральная машина</h4>
                     </div>
                 </div>
                 <div className="repair-info">
                     <div className="repair-img repair-margin-img">
                         <img src= { WashingPng } alt="washing.png"/>
                     </div>
                     <div className="repair-text">
                         <h4>Течет стиральная машина</h4>
                     </div>
                 </div>
                 <div className="repair-info">
                     <div className="repair-img repair-margin-img">
                         <img src= { WaterDropPng } alt="water-drop.png"/>
                     </div>
                     <div className="repair-text">
                         <h4>Не открывается дверка</h4>
                     </div>
                 </div>
                 <div className="repair-info">
                     <div className="repair-img repair-margin-img">
                         <img src={ Group2Png } alt="Group2.png"/>
                     </div>
                     <div className="repair-text">
                         <h4>Не работает отжим в машинке</h4>
                     </div>
                 </div>
                 <div className="repair-info">
                     <div className="repair-img repair-margin-img">
                     <img src={ Group3Png } alt="Group3.png"/>
                     </div>
                     <div className="repair-text">
                         <h4>Не завершает процесс стирки</h4>
                     </div>
                 </div>
          </div>
          
         <div className="repair-img-25">
             <img src= { MinsSvg } alt="25mins.svg"/>
         </div>
     </section>
     </div>
    );
}