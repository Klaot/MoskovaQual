import './ErrorAllStyle.css';
import StarPng from '../../../img/guarantee/star.png';
import QuickInquairy from '../../../components/QuickInquairy';

const INDESIT = () => {

    const indesitError = [
        {id: 1,name: 'F01 - Короткое замыкание симистора в цепи питания двигателя.'},
        {id: 2,name: 'F02 - Таходатчик не формирует сигнал об оборотах двигателя.'},
        {id: 3,name: 'F03 - Неправильная работа датчика температуры воды.'},
        {id: 4,name: 'F04 - Датчик уровня воды - прессостат - одновременно выдаёт сигнал — полный и пустой бак.'},
        {id: 5,name: 'F05 - Проблема со сливом воды(Сломана помпа или забит шланг слива'},
        {id: 6,name: 'F06 - Указывает на то, что на панели управления залипли кнопки.'},
        {id: 7,name: 'F07 - Нет нагрева воды.'},
        {id: 8,name: 'F08 - Неисправно реле ТЭНа на модуле управления или сам нагревательный элемент.'},
        {id: 9,name: 'F09 - Неполадки в плате управления.Слетела прошивка, Проблемма с процессором.'},
        {id: 10,name: 'F10 - Стиральная машина, за отведенный промежуток времени, не набрала воду.'},
        {id: 11,name: 'F11 - Ошибка возникает вследствие выхода из строя помпы.'},
        {id: 12,name: 'F12 - Нет связи между главным блоком управления и панелью индикации.'},
        {id: 13,name: 'F13 - Выход из строя датчика температуры сушки или обрыв провода ведущего к плате.'},
        {id: 14,name: 'F14 - Не включается сушка.'},
        {id: 15,name: 'F15 - Нет выключения сушки.'},
        {id: 16,name: 'F16 - Заблокирован барабан стиральной машины.'},
        {id: 17,name: 'F17 - Неплотно закрыта дверца люка или отгорели контакты ведущие к замку возможно сломался замок.'},
        {id: 18,name: 'F18 - Ошибка процессора. Нарушена связь между контролером платы управления и двигателем.'}
    ]

    return (
        <div className='container QuestionAndAnswer'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Коды ошибок стиральных машин INDESIT</h1>
                    <h3>В данном разделе вы найдете основные ошибки и способы 
                    их устранения в стиральных машинах марки INDESIT:</h3>
                </div>
                <div className='error-number'>
                    {indesitError.map(item => {
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

export default INDESIT;