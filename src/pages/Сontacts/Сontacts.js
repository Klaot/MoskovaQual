import QuickInquairy from '../../components/QuickInquairy';
import ContactImg1 from '../../img/contacts/contacts1.png';
import WashingContact from '../../img/contacts/washing-contact.png';
import Gps from '../../img/contacts/gps.png';
import Hand from '../../img/contacts/hand.png';
import EmailContacts from '../../img/contacts/email.png';

import '../Сontacts/Contacts.css';
import YandexMap from './YandexMap';

const  Contacts = () => {
    return (
        <>
        <div className="container Contacts">
            <div className="containerTwo">
                <div className='Contacts-header'>
                   <h1>Контакты</h1> 
                </div>
            </div>
            <div className='Contacts-info'>
                <img className='Contacts-info-img' src={ContactImg1} alt='contact-img' />
                <div className='Contacts-addres'>
                    <div className='Contacts-info-addres'>
                        <img src={WashingContact} alt='WashingContact'/>
                        <h2>Где мы находимся?</h2>
                    </div> 
                    <div className='Contacts-info-addres'>
                        <img src={Gps} alt='Gps'/>
                        <p>ул. Янки Брыля, д. 21<br></br>
                        По будням с 07:00 до 24:00<br></br>
                        По выходным с 07:00 до 24:00</p>
                    </div> 
                    <div className='Contacts-info-addres'>
                        <img src={Hand} alt='Hand' />
                        <p>Наш номер телефона<br></br>
                        +7(495) 755 69 83</p>
                    </div> 
                    <div className='Contacts-info-addres'>
                        <img  src={EmailContacts} alt='EmailContacts' />
                        <p>Moscowqual@.ru</p>
                    </div> 
                </div>
            </div>
        </div>
        <YandexMap />
        <QuickInquairy />
        </>
    )
};

export default Contacts;