import '../ForLawyers/ForLawyers.css';
import StarPng from '../..//img/guarantee/star.png';
import WyUsForGuarantee from '../Guarantee/WyUsForGuarantee';

export default function ForLawyers() {

    return (
        <div>
            <div className="container for-lawyers mobile-style">
                <div className="containerTwo">
                    <div className="for-lawyers-header">
                    <h1>Для Юридических лиц</h1>
                    <h3>Ремонт техники по безналичному расчету</h3>
                    <div className="for-lawyers-subsequence">
                        <img src={StarPng} alt="StarPng" />
                        <p>Вы оставляете заявку на требуемую услугу по телефону,
                        либо Заполните бриф.</p>
                    </div>
                    <div className="for-lawyers-subsequence">
                        <img src={StarPng} alt="StarPng" />
                        <p>Наш специалист созванивается с Вами
                        для уточнения всех деталей и назначает точное время приезда.</p>
                    </div>
                    <div className="for-lawyers-subsequence">
                        <img src={StarPng} alt="StarPng" />
                        <p>Мы выставим Вам счет по электронной почте
                        на вызов мастера и диагностику.</p>
                    </div>
                    <div className="for-lawyers-subsequence">
                        <img src={StarPng} alt="StarPng" />
                        <p>После оплаты мастер приедет, определит неисправность
                        и озвучит стоимость ремонта.</p>
                    </div>
                    <div className="for-lawyers-subsequence">
                        <img src={StarPng} alt="StarPng" />
                        <p>После оплаты мастер приедет, определит неисправность
                        и озвучит стоимость ремонта.</p>
                    </div>
                    <div className="for-lawyers-subsequence">
                        <img src={StarPng} alt="StarPng" />
                        <p>После совершения ремонта вы получаете бланк строгой отчетности (БСО),
                        в которой мастер укажет гарантию на ремонт, рекомендации и скидку
                        на дальнейшее сотрудничество.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="containerTwo">
                <h2 className='for-lawyers-form-h2'>Вызов мастера</h2>
                <form className="for-lawyers-form">
                    <input placeholder="Название компании, ИНН:"></input>
                    <input placeholder="Ваш номер телефона:"></input>
                    <input placeholder="E-mail, для отправки копии счёта:"></input>
                    <input placeholder="Фактический адрес:"></input>
                    <input placeholder="Вид техники:"></input>
                    <input placeholder="Модель:"></input>
                    <textarea placeholder="Что случилось?" type ='text'></textarea>
                    <p>Нажав кнопку «Заказать ремонт», я даю согласие на обработку
                    моих персональных данных.</p>
                    <button className="for-lawyers-form-btn">Заказать ремонт.</button>
                </form>
            </div>
            <WyUsForGuarantee />
        </div>
    )
}