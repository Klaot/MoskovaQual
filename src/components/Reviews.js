import React from "react";
import '../components/Reviews.css';
import Feed1Png from '../img/REVIEWS/feed1.png';
import Feed2Png from '../img/REVIEWS/feed2.png';
import Feed3Png from '../img/REVIEWS/feed3.png';
import ReviewsFacebook from '../img/REVIEWS/faccebook.png';
import ReviewsVk from '../img/REVIEWS/vkon.png';
import ReviewsArrow from '../img/REVIEWS/arrow.png';

export default function Reviews() {
    return (
        <div>
        <section className="container reviews">
        <div className="containerTwo reviews-header">
            <h1>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
            <h3>Наши клиенты всегда остаются довольны нашими услугами!<br/>
                Лучше всего они скажут об этом сами!</h3>
        </div>
        <div className="reviews-all-card">
            <div className="reviews-card">
                <div className="reviews-user">
                    <img src={ Feed1Png } alt="feed1.png"/>
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
                    <img src={ Feed2Png } alt="feed2.png"/>
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
                    <img src={ Feed3Png } alt="feed3.png"/>
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
        </div>
    </section>
        <div class="reviews-slide containerTwo">
            <button class="reviews-slide-btnL">
                <img src={ ReviewsArrow } alt="arrow"/>
            </button>
            <div class="reviews-slide-nav"><p><span>2</span> из 20</p></div>
            <button class="reviews-slide-btnR">
                <img src={ ReviewsArrow } alt="arrow"/>
            </button>    
        </div>
    </div>
    );
}