import QuickInquairy from '../../components/QuickInquairy';
import './QuestionAndAnswer.css';

const QuestionAndAnswer = () => {



    return (
        <div className='container QuestionAndAnswer'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Вопрос-ответ</h1>
                    <h2>Задавайте ваши вопросы по ремонту стиральных машин!</h2>
                    <button className='QuestionAndAnswer-btn'>Задать вопрос</button>
                </div>
            </div>
            <QuickInquairy />
        </div>
    )
}

export default QuestionAndAnswer;