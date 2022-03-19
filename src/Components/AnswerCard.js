import '../assets/style/style.css';
import { useState } from 'react';
import Arrow from '../assets/img/setinha.png';

function AnswerCard(props) {
    const { answer } = props;

    const [selected, setSelected] = useState(true);

    return !selected ? (
        <section className='card-deck'>
            <article className='question-option selected'>
                <div>
                    <p>pergunta</p>
                    <img src={Arrow} onClick={() => setSelected(false)} />
                </div>
            </article>
        </section>) : (
        <div className='answer'>
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