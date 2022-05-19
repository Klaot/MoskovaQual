import React from 'react';
import { useState } from 'react';
import './ModalShowBtn.css';


const ModalShowBtn = () => {

   const [open, setOpen] = useState(false);
   const [send, setSend] = useState(false); 

   const showModal = () => {
       setOpen(!open)
    }

   const closeModal = () => {
        setOpen(!open)
    }

    let modalClass = "modal";
        if (open) {
            modalClass += " showMenu"
    }
    
    const sendForm = (e) => {
        e.preventDefault();
        setSend(true);
    }
    
    const submitted = send ? <SubmittedForm /> : <ViewForm />;
    
    return (
        <div>
            <div className={modalClass}>
              <div className='modal__dialog'>
                <div className='modal__content'>
                    <form action="#" onSubmit={sendForm}>
                       <div className='modal__close' onClick={closeModal}>&times;</div>
                       <div className='modal__title'><p>Мы свяжемся с вами как можно быстрее!</p></div>
                       {submitted}
                    </form>
                </div>
            </div>
         </div>
            <button onClick={showModal} className='ModalShowBtn'>Заказать ремонт</button>
        </div>
    )
};

export default ModalShowBtn;

export const ViewForm = () => {
    return (
        <>
         <input required placeholder="Ваше имя" name="name" type="text" className="modal__input"/>
         <input required placeholder="Ваш номер телефона" name="phone" type="phone" className="modal__input"/>
         <button className="btn">Перезвонить мне</button>
        </>
    )
};

export const SubmittedForm = () => {
    return (
        <div id='SubmittedForm'>
            <h2>Спасибо!<br></br> Ваша заявка принята!</h2>
        </div>
    )
};


