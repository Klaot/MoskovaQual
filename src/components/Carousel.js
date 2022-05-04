import './Carousel.css';
import { useState, useEffect, Children, cloneElement} from 'react';
import ReviewsArrow from '../img/REVIEWS/arrow.png';

 const PAGE_WIDTH = 409;
 let pageNumber = 1;

 const Carousel = ({children}) => {

    const [pages, setPage] = useState([]);
    const [offset, setOffset] = useState([]);

    const hendleLeftArrow = () => {
        pageNumber <= 1 ? pageNumber = 1 : pageNumber -= 1;
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        })
    }

    const hendleRightArrow = () => {
        pageNumber >= 4 ? pageNumber = 4 : pageNumber += 1; 
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset) ;
        })
    }

    useEffect(() => {
        setPage(
            Children.map(children, child => {
                return cloneElement(child)
            })
        )
    }, []);

    return (
        <>
        <div className="main-container containerTwo">
            <div className="windows">
                <div className="all-items-container"
                 style={{transform: `translateX(${offset}px)`}}>
                    {pages}
                </div>
            </div>
            <div className="reviews-slide containerTwo">
                <button className="reviews-slide-btnL" onClick={hendleLeftArrow}>
                    <img src={ ReviewsArrow } alt="arrow"/>
                </button>
                <div className="reviews-slide-nav"><p>{pageNumber} <span>из 4</span></p></div>
                <button className="reviews-slide-btnR" onClick={hendleRightArrow}>
                    <img src={ ReviewsArrow } alt="arrow"/>
                </button>    
            </div>
        </div> 
        </>
    )
}

export default Carousel;
