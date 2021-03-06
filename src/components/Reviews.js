import React from "react";

import '../components/Reviews.css';
import Feed1Png from '../img/REVIEWS/feed1.png';
import Feed2Png from '../img/REVIEWS/feed2.png';
import Feed3Png from '../img/REVIEWS/feed3.png';
import Feed4Png from '../img/REVIEWS/feed4.png';
import ReviewsFacebook from '../img/REVIEWS/faccebook.png';
import ReviewsVk from '../img/REVIEWS/vkon.png';
// import ReviewsArrow from '../img/REVIEWS/arrow.png';
import Carousel from "./Carousel";

export default function Reviews() {
    return (
        <div>
        <section className="container reviews">
            <div className="containerTwo reviews-header">
                <h1>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
                <h3>Наши клиенты всегда остаются довольны нашими услугами!<br/>
                    Лучше всего они скажут об этом сами!</h3>
            </div>
            <div className="reviews-all-card container-reviews">
        <Carousel>
            <div className="reviews-card">
                <div className="reviews-user">
                    <img className="reviews-user-avatar" src={ Feed1Png } alt="feed1.png"/>
                    <div className="reviews-user-info">
                        <h3>Елизавета</h3>
                        <p>18 января 2021</p>
                    </div>
                    <div className="reviews-user-social">
                        <img src={ ReviewsVk } alt="vkon.png"/>
                        <img src={ ReviewsFacebook } alt="faccebook.png"/>
                    </div>
                </div>
                <p>Идейные соображения высшего порядка, а также реализация намеченных 
                плановых заданий обеспечивает широкому кругу (специалистов) участие 
                в формировании направлений прогрессивного развития.</p>
            </div>

            <div className="reviews-card active-reviews">
                <div className="reviews-user">
                    <img className="reviews-user-avatar" src={ Feed2Png } alt="feed2.png"/>
                    <div className="reviews-user-info">
                        <h3>Александр</h3>
                        <p>18 ноября 2020</p>
                    </div>
                    <div className="reviews-user-social">
                        <img src={ ReviewsVk } alt="vkon.png"/>
                        <img src={ ReviewsFacebook } alt="faccebook.png"/>
                    </div>
                </div>
                <p>Идейные соображения высшего порядка, а также реализация намеченных 
                    плановых заданий обеспечивает широкому кругу (специалистов) участие 
                    в формировании направлений прогрессивного развития.</p>
            </div>
                
            <div className="reviews-card">
                <div className="reviews-user">
                    <img className="reviews-user-avatar" src={ Feed3Png } alt="feed3.png"/>
                    <div className="reviews-user-info">
                        <h3>Мария</h3>
                        <p>21 января 2021</p>
                    </div>
                    <div className="reviews-user-social">
                        <img src={ ReviewsVk } alt="vkon.png"/>
                        <img src={ ReviewsFacebook } alt="faccebook.png"/>
                    </div>
                </div>
                <p>Идейные соображения высшего порядка, а также реализация намеченных 
                    плановых заданий обеспечивает широкому кругу (специалистов) участие 
                    в формировании направлений прогрессивного развития.</p>
            </div>
            
            <div className="reviews-card">
                <div className="reviews-user">
                    <img className="reviews-user-avatar" src={ Feed4Png } alt="feed3.png"/>
                    <div className="reviews-user-info">
                        <h3>ToyGroup</h3>
                        <p>12 января 2022</p>
                    </div>
                    <div className="reviews-user-social">
                        <img src={ ReviewsVk } alt="vkon.png"/>
                        <img src={ ReviewsFacebook } alt="faccebook.png"/>
                    </div>
                </div>
                <p>Идейные соображения высшего порядка, а также реализация намеченных 
                    плановых заданий обеспечивает широкому кругу (специалистов) участие 
                    в формировании направлений прогрессивного развития.</p>
            </div>
            </Carousel>        
        </div>
    </section>
    </div>
    );
}