import QuickInquairy from '../../components/QuickInquairy';
import './QuestionAndAnswer.css';
import { useState, useEffect } from 'react';
import Questions from './Questions';


const QuestionAndAnswer = () => {

    const questionBD = [
        {name: 'Михаил', id: 1, title: `Здравствуйте, в моем холодильнике 
        Samsung Samsung SR-30 RMBSS с системой охлаждения ноу Фрост сломался термостат, 
        называется SAMSUNG PFN-174S-05I, какой альтернативой его можно заменить, 
        т.к. подобные уже не производится и не продаются?`},

        {name: 'Кирилл', id: 2, title: `Здравствуйте, в моем холодильнике 
        Samsung Samsung SR-30 RMBSS с системой охлаждения ноу Фрост сломался термостат, 
        называется SAMSUNG PFN-174S-05I, какой альтернативой его можно заменить, 
        т.к. подобные уже не производится и не продаются?`},

        {name: 'Максим', id: 3, title: `indesit witl1067. Здравствуйте,  у меня перестала 
        выжимать машинка . Какая может быть причина . Но в этой машинки я забыл защёлкнуть 
        крышки барабана . И после этого она перестала выжимать , стирает но не выжимает.
        И ещё под конец стирки сзади машинки запахло полёным . `}
    ]

    const [form, setForm] = useState(false);
    const [questionsUser, setQuestionsUser] = useState(questionBD);

    const addQuestion = (item) => {
        setQuestionsUser([...questionsUser, item]);
        setForm(false)
    }

    const activeForm = () => {
        setForm(!form)
    }

    const questionAndAnswer = 
        <div className='container QuestionAndAnswer mobile-style'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Вопрос-ответ (в разработке)</h1>
                    <h2>Задавайте ваши вопросы по ремонту стиральных машин!</h2>
                    <button className='QuestionAndAnswer-btn' onClick={activeForm}>Задать вопрос</button>
                </div>
                    <Questions questionBD = {questionsUser} activeForm = {activeForm}/>
            </div>
            <QuickInquairy />
        </div>;
    return (
        <>
         {form ? <QuestionsForm addQuestion = {addQuestion}/> : questionAndAnswer}
        </>
        
    )
};

export default QuestionAndAnswer;

export const QuestionsForm = ({addQuestion}) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');
    
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDitry, setEmailDirty] = useState(false);
    const [textAreaDitry, setTextAreaDirty] = useState(false);

    const [nameError, setNameError] = useState('Поле Имя не может быть пустым!');
    const [emailError, setEmailError] = useState('Поле Email не может быть пустым!');
    const [textAreaError, setTextAreaError] = useState('Поле с вопросом не может быть пустым!');

    const [formVolid, setFormVolid] = useState(false);


    useEffect( () => {
        if (nameError || emailError || textAreaError) {
            setFormVolid(false);
        } else {
            setFormVolid(true);
        }

    } , [nameError, emailError, textAreaError]);

    const blurHeandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
            break
            case 'email':
                setEmailDirty(true)
                break
            case 'textarea':
                setTextAreaDirty(true)
                break
        }
    }

    const emailHeandler = (e) => {
        setEmail(e.target.value)
        const emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        if ( !emailCheck.test(e.target.value) ) {
            setEmailError('Некорректный адрес');
        } else {
            setEmailError('');
        }
    }

    const nameHeandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length === 0 || e.target.value.length > 15) {
            setNameError('Поле не должно быть пустым или содержать больше 15 символов');
            if (!e.target.value) {
                setNameError('Поле не может быть пустым!');
            }
        } else {
            setNameError('');
        }
    }

    const textAreaHeandler = (e) => {
        setTextArea(e.target.value);
        if (e.target.value.length === 0 || e.target.value.length > 300) {
            setTextAreaError('Поле не должно быть пустым или содержать больше 300 символов');
            if (!e.target.value) {
                setTextAreaError('Поле не может быть пустым!');
            }
        } else {
            setTextAreaError('');
        }
    }
    
    const addNewItem = (e) => {
        e.preventDefault();
        let newItem;
        
            newItem = {
                name: e.target[0].value,
                email: e.target[1].value,
                title: e.target[2].value,
                id: Date.now()
            }

            addQuestion(newItem);
            
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = ""; 
        }  
    
    return (
        <div className='container QuestionAndAnswer mobile-style'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Задать вопрос</h1>
                </div>
                <form onSubmit={addNewItem} className='containerTwo QuestionsForm'>
                        {(nameDirty && nameError) && <h4 style={{color: 'red'}}>{nameError}</h4>}
                        <input onChange={e => nameHeandler(e)} placeholder='Ваше имя' name='name' type='text' onBlur={e => blurHeandler(e)}></input>
                        {(emailDitry && emailError) && <h4 style={{color: 'red'}}>{emailError}</h4>}
                        <input onChange={e => emailHeandler(e)} placeholder='Ваш Email' name='email' type='text' onBlur={e => blurHeandler(e)}></input>
                        {(textAreaDitry && textAreaError) && <h4 style={{color: 'red'}}>{textAreaError}</h4>}
                        <textarea onChange={e => textAreaHeandler(e)} placeholder='В вопросе укажите марку и, по возможности, модель техники.
                         Опишите симптомы поведения техники (например, стиральная машина не сливает).
                         Чем больше информации вы сообщите мастеру, тем более полно он сможет ответить 
                         на ваш вопрос.' name='textarea' type='text' onBlur={e => blurHeandler(e)}></textarea>
                         <div className='QuestionsForm-error'>
                             <button disabled = {!formVolid} className='QuestionAndAnswer-btn'>Задать вопрос</button>
                             <h3 className='QuestionsForm-error-h3' style={formVolid ? {color: 'green'} : {color: 'red'}}>{!formVolid ? 'Пожалуйста заполните все поля!' : 'Нажмите чтобы оставить вопрос'}</h3>
                         </div>
                         
                         <p>*Нажимая на кнопку, я даю согласие на обработку своих персональных данных</p>
                </form>
            </div>
        </div>
    )
};

