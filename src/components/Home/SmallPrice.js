import React from "react";
import '../..//components/Home/SmallPrice.css';
import ModalShowBtn from "../ServicesAndPrices/ModalShowBtn";

export default function SmallPrice() {
    return (
        <section className="price containerTwo">
        <div className="price-item1 price-item-first">
            <h3 className="price-text-h3">Течет стиральная машина</h3>
            <p className="price-text-p">Ремонт от <span>100 руб</span></p>
            <ModalShowBtn />
            
        </div>
        <div className="price-item2">
            <h3 className="price-text-h3">Не открывается люк</h3>
            <p className="price-text-p">Ремонт от <span>120 руб</span></p>
            <ModalShowBtn />
            
        </div>
        <div className="price-item1">
            <h3 className="price-text-h3">Не греет воду</h3>
            <p className="price-text-p">Ремонт от <span>300 руб</span> </p>
            <ModalShowBtn />
            
        </div>
        <div className="price-item2">
            <h3 className="price-text-h3">Стиральная машина не 
                отжимает</h3>
            <p className="price-text-p">Ремонт от <span>250 руб</span></p>
            <ModalShowBtn />
            
        </div>
        <div className="price-item1">
            <h3 className="price-text-h3">Не работает слив 
                в стиральной машине</h3>
            <p className="price-text-p">Ремонт от <span>500 руб</span></p>
            <ModalShowBtn />
            
        </div>
        <div className="price-item2">
            <h3 className="price-text-h3">Не вращается барабан</h3>
            <p className="price-text-p">Ремонт от <span>800 руб</span></p>
            <ModalShowBtn />
            
        </div>
        <div className="price-item2 price-item-last">
            <a href="#">Подробные цены на ремонт стиральных машин</a>
        </div>
    </section>

    );
}