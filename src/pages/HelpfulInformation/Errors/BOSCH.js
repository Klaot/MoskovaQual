import './ErrorAllStyle.css';
import StarPng from '../../../img/guarantee/star.png';
import QuickInquairy from '../../../components/QuickInquairy';


const BOSCH = () => {

const boschErrors = [
    {id: 1,name: 'F00, Е00 - Сбой прошивки'},
    {id: 2,name: 'E02 - Выход из строя двигателя'},
    {id: 3,name: 'E67 - Ошибка в модуле или программаторе'},
    {id: 4,name: 'F01 - Проблемы с люком'},
    {id: 5,name: 'F02 - Нет воды'},
    {id: 6,name: 'F03 - Проблема со сливом воды'},
    {id: 7,name: 'F03 - Проблема со сливом воды'},
    {id: 8,name: 'F04 - Утечка воды'},
    {id: 9,name: 'F16, Е16 - Ошибка блокировки люка'},
    {id: 10,name: 'Е17, F17 - Превышено время залива воды'},
    {id: 11,name: 'Е18, F18 - Ошибка слива воды в СМ'},
    {id: 12,name: 'F19 - Нет нагрева воды'},
    {id: 13,name: 'F20 - Незапланированный нагрев'},
    {id: 14,name: 'F21 - Нет вращения барабана'},
    {id: 15,name: 'Е23, F23 - Сработал Аквастоп'},
    {id: 16,name: 'F25 - Вышел из строя Аква сенсор (датчик мутности воды)'},
    {id: 17,name: 'F26 - Вышел из строя датчик давления'},
    {id: 18,name: 'F27 - Ошибка датчика давления'},
    {id: 19,name: 'F28 - Неисправность датчика потока воды'},
    {id: 20,name: 'F29 - Нет воды, проходящей через датчик потока воды'},
    {id: 21,name: 'F31 - Уровень воды слишком высокий'},
    {id: 22,name: 'F34 - Не закрывается замок люка'},
    {id: 23,name: 'F36 - Замок стиральной машины неисправен'},
    {id: 24,name: 'F37 - Неисправен NTC'},
    {id: 25,name: 'F38 - Короткое замыкание NTC (датчик температуры)'},
    {id: 26,name: 'F42 - Слишком высокие обороты электродвигателя'},
    {id: 27,name: 'F43 - Блокировка бака СМ'},
    {id: 28,name: 'F44 - Нет вращения в обратную сторону'},
    {id: 29,name: 'F59 - 3D-Датчик: ошибка данных'},
    {id: 30,name: 'F60 - Датчик потока неисправен'},
    {id: 31,name: 'F61 - Неверный код двери'},
    {id: 32,name: 'F63 - Проблема функциональной защиты'},
    {id: 33,name: 'F67 - Неисправность платы управления'},
]

    return (
        <div className='container QuestionAndAnswer mobile-style'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Коды ошибок стиральных машин BOSCH</h1>
                    <h3>В данном разделе вы найдете основные ошибки и способы 
                    их устранения в стиральных машинах марки BOSCH:</h3>
                </div>
                <div className='error-number'>
                    {boschErrors.map(item => {
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

export default BOSCH;