import '../assets/style/style.css';
import { useState } from 'react';
import Arrow from '../assets/img/setinha.png';

function AnswerCard(props) {
    const { answer } = props;

    const [selected, setSelected] = useState(true);
    const [showAnswer, setShowAnswer] = useState();
    const classe = 'hidden'

    return !selected ? (
        <div className='question-option selected'>
            <p>pergunta</p>
            <img src={Arrow} onClick={() => setSelected(false)} />
        </div>) : (
        <div className={classe}>
            <p>{answer}</p>
            <div className='game-options'>
                <p>Não lembrei</p>
                <p>Quase não lembrei</p>
                <p>Zap!</p>
            </div>
        </div>

        
    )
}

export default AnswerCard;