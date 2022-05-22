import './Questions.css'


const Questions = ({questionBD, activeForm}) => {


    return (
        <div className='container'>
            <div className='containerTwo questions'>
                {questionBD.map(item => {
                    return (
                        <div className='question-items' key={item.id}>
                            <div className='question-item' >
                                <h3>{item.name}</h3>
                                <p>{item.title}</p>
                            </div>
                            <button className='QuestionAndAnswer-btn' onClick={activeForm}>Задать новый вопрос</button>
                        </div>
                    )}      
                )}
            </div>
        </div>

    )
}

export default Questions;