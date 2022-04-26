import QuickInquairy from '../../../components/QuickInquairy';
import StarPng from '../../../img/guarantee/star.png';
import './ErrorAllStyle.css';

const HAIER = () => {

    const haierError = [
        {id: 1,name: 'No salt - В резервуаре нет стирального порошка.'},
        {id: 2,name: 'UNB - Машина медленно вращает или совсем не вращает барабан.'},
        {id: 3,name: 'E1 - Стиральная машина отказывается начинать стирку.'},
        {id: 4,name: 'E2 - Машина не может слить вовремя воду.'},
        {id: 5,name: 'E3 - Поломка термодатчика'},
        {id: 6,name: 'E4 - Неисправность ТЭНа'},
        {id: 7,name: 'E5 - Стиральная машина не набирает или очень медленно набирает воду за положенный период времени.'},
        {id: 8,name: 'E6 - Неисправность блока управления.'},
        {id: 9,name: 'E7 - Критическая ошибка: часто это выход из строя нескольких деталей блока управления.'},
        {id: 10,name: 'E8 - Вышел из строя прессостат.Перегорел симистор.'},
        {id: 11,name: 'E9 - Сгорел наливной клапан.'},
        {id: 12,name: 'E10 - Поломка прессостата.'},
        {id: 13,name: 'EUAR - Критическая ошибка — проблемы с модулем управления.'}
        
    ]

    return (
        <div className='container QuestionAndAnswer'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Коды ошибок стиральных машин HAIER</h1>
                    <h3>В данном разделе вы найдете основные ошибки и способы 
                    их устранения в стиральных машинах марки HAIER:</h3>
                </div>
                <div className='error-number'>
                    {haierError.map(item => {
                    return (
                        <div className='ErrorCodes' key={item.id}>
                            <img src={StarPng} alt="StarPng" />
                            <p>{item.name}</p>
                        </div>
                    )})}
                </div>
            </div>
            <QuickInquairy /> 
        </div>
    )
}

export default HAIER;