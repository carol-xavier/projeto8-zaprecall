import '../assets/style/style.css';
import { useState } from 'react';

import Arrow from '../assets/img/setinha.png';
import Play from '../assets/img/play.png';


function Flashcards(props) {
    const { question, answer } = props;

    const [selected, setSelected] = useState(false);
    

    return !selected ? (
        <section className='card-deck'>
            <article className='question-option' onClick={() => setSelected(true)}>
                <div>
                    <h6>Pergunta</h6>
                    <img src={Play} />
                </div>
            </article>
        </section>
    ) : (<section className='card-deck'>
        <article className='question-option selected'>
            <div>
                <p>{question}</p>
                <img src={Arrow} />
            </div>
        </article>
    </section>)
}


export default Flashcards;


