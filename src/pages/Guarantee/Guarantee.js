
import './Guarantee.css';
import WyUsForGuarantee from './WyUsForGuarantee';


export default function Guarantee() {

    return (
        <div>
            <div className="container Guarantee mobile-style">
                <div className="containerTwo">
                    <div className="Guarantee-header">
                    <h1>Гарантия</h1>
                    <p>После совершение ремонта вы получаете бланк строгой отчетности (БСО),
                    в которой мастер укажет гарантию на ремонт, рекомендации и скидку на дальнейшее 
                    сотрудничество.Преимущество нашего сервисного центра — это мастера, которые  точно 
                    определяют поломку и в кратчайшие сроки починят вашу сломанную технику.
                    Если возникнет аналогичная поломка, ремонт будет осуществляться БЕСПЛАТНО.
                    Срок гарантии будет определяться мастером, так как зависит от комплектующих и
                    характера поломки.</p>
                    </div>
                </div>
            </div>
            <WyUsForGuarantee />
        </div>
    )
}

