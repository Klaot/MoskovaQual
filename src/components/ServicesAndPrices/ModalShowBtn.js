import React from 'react';
import './ModalShowBtn.css';




class ModalShowBtn extends React.Component {

    constructor () {
        super()
        this.state = {
            open: false //Делаем стэйт и записываем в него объект с ключем и свойством open false
        }
    }

    showModal = () => {
        this.setState(({open}) => ({ // Через метод сэт стэйт и функцию меняем состояние компонента при клике на кнопку
            open: !open              // с помощью этой функции мы меняем свойство на true
        }))
    }

    closeModal = () => {
        this.setState(({open}) => ({
            open: !open
        }))
    }

    
    render() {

        const {open} = this.state; // проверяем если свойство open === true то меняем содержимое переменной с классом 
        let modalClass = "modal"; // и тем самым добавляем или убераем класс show который показывает модальное окно 
        if (open) {
            modalClass += " show"
        }

    return (
        <div>
            <div className={modalClass}>
              <div className="modal__dialog">
                <div className="modal__content">
                    <form action="#">
                        <div className="modal__close" onClick={this.closeModal}>&times;</div>
                       <div className="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                         <input required placeholder="Ваше имя" name="name" type="text" className="modal__input"/>
                         <input required placeholder="Ваш номер телефона" name="phone" type="phone" className="modal__input"/>
                        <button className="btn">Перезвонить мне</button>
                    </form>
                </div>
            </div>
         </div>
            <button onClick={this.showModal} className="ModalShowBtn">Заказать ремонт</button>
        </div>
    
    )
  }
}

export default ModalShowBtn;
