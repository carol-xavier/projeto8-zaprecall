import '../assets/style/style.css';
import { useState } from 'react';
import AnswerCard from './AnswerCard';
import Arrow from '../assets/img/setinha.png';
import Play from '../assets/img/play.png';


function Flashcards(props) {
    const { question, index } = props;

    const [selected, setSelected] = useState(false);

    const [showAnswer, setShowAnswer] = useState(false);
    const classe = showAnswer ? 'hidden' : '';
    const difClasse = showAnswer ? '' : 'hidden';

    const [solution, setResult] = useState(null);
    const newClass =  solution ? `question-option ${solution}` : `question-option`;

    function getResult(event, result){
        event.stopPropagation();
        setSelected(false); 
        setShowAnswer(false);
        setResult(result);
    } 

    return !selected ? (
        <div className={newClass} onClick={() => setSelected(true)}>
            <h6>Pergunta {index + 1}</h6>
            <img src={Play} />
        </div>
    ) : (
        <div className='selected'>
            <div className= {classe}>
                <p>{question.question}</p>
                <img src={Arrow} onClick={() => setShowAnswer(!showAnswer)}/>
            </div>

            <div className={difClasse}>
                <p>{question.answer}</p>
                <div className='answer-options'>
                    <div className='answer-box  dont-remember' onClick={(event) => getResult(event, 'dont-result')}>Não lembrei</div>
                    <div className='answer-box  almost-remember' onClick={(event) => getResult(event, 'almost-result')}>Quase não lembrei</div>
                    <div className='answer-box  zap' onClick={(event) => getResult(event, 'zap-result')}>Zap!</div>
                </div>
            </div>
        </div >
    )
}

export default Flashcards;


