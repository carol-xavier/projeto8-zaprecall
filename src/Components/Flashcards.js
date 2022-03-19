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

    return !selected ? (
        <div className='question-option' onClick={() => setSelected(true)}>
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
                <div className='game-options'>
                    <p>Não lembrei</p>
                    <p>Quase não lembrei</p>
                    <p>Zap!</p>
                </div>
            </div>
        </div >
    )
}

export default Flashcards;


