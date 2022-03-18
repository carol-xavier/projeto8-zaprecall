import React from 'react';
import App from './App';
import '../assets/style/style.css';
import FlashcardDeck from './FlashcardDeck';
import Arrow from '../assets/img/setinha.png';
import Play from '../assets/img/play.png';


function Flashcards(props) {
    const { id, question, answer } = props;

    const [selected, setSelected] = React.useState(false);
    const classe = `question-option ${selected ? 'selected' : ''}`;
    console.log(classe);

    const [displayOption, setDysplayOption] = React.useState(false);
    const hide = `question-text ${displayOption ? 'hidden' : ''}`;
    const display = `question-text ${displayOption ? '' : 'hidden'}`;

    return (
        <section className='card-deck'>
            <article className={classe} onClick={() => setSelected(!selected)}>
                <div className={hide} onClick={() => setDysplayOption(!displayOption)}>
                    <h6>{id}</h6>
                    <img src={Play} />
                </div>
                <p className={display}>{question}</p>
            </article>
        </section>
    )
}

export default Flashcards;



{/*
<div className='answer hidden'>
<p>{answer}</p>
<div className='game-options'>
    <p>Não lembrei</p>
    <p>Quase não lembrei</p>
    <p>Zap!</p>
</div>
</div> */}