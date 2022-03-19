import '../assets/style/style.css';
import { useState } from 'react';
import AnswerCard from './AnswerCard';
import Arrow from '../assets/img/setinha.png';
import Play from '../assets/img/play.png';


function Flashcards(props) {
    const { question, index } = props;

    const [selected, setSelected] = useState(false);


    return !selected ? (
        <div className='question-option' onClick={() => setSelected(true)}>
            <h6>Pergunta {index + 1}</h6>
            <img src={Play} />
        </div>

    ) : (
        <div className='question-option selected'>
            <p>{question.question}</p>
            <img src={Arrow} />
        </div>
    )
}

export default Flashcards;


