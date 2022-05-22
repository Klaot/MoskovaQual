import QuickInquairy from '../../components/QuickInquairy';
import './QuestionAndAnswer.css';
import { useState } from 'react';
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
  
    const addNewItem = (e) => {
        e.preventDefault();
        const newItem = {
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
                        <input placeholder='Ваше имя' name='name' type='text'></input>
                        <input placeholder='Ваш Email' name='email' type='email'></input>
                        <textarea placeholder='В вопросе укажите марку и, по возможности, модель техники.
                         Опишите симптомы поведения техники (например, стиральная машина не сливает).
                         Чем больше информации вы сообщите мастеру, тем более полно он сможет ответить 
                         на ваш вопрос.' name='textarea' type='text'></textarea>
                         <button className='QuestionAndAnswer-btn'>Задать вопрос</button>
                         <p>*Нажимая на кнопку, я даю согласие на обработку своих персональных данных</p>
                </form>
            </div>
        </div>
    )
};

