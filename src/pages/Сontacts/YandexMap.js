import './YandexMap.css';

const YandexMap = () => {
    return (
        <div className='container yandex-map'>
            <div className='containerTwo'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9b2a3f9fdf9950ffb47343e6f278f06c2ad275d5b4f414d9c6be33fa63a6c6e&amp;source=constructor"
                width="1170" height="720" frameBorder="0" title='yandex'></iframe>
            </div>  
        </div>
            
        
    )
}

export default YandexMap;