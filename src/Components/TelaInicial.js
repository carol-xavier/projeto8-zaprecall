import { useState } from 'react';
import FlashcardDeck from './FlashcardDeck';
import Logo from '../assets/img/logo.png';
import littleLogo from '../assets/img/logo-pequeno.png';

function TelaInicial() {

    const [startGame, setStartGame] = useState(false);


    return !startGame ? (
        <section>
            <img src={Logo} />
            <h1>ZapRecall</h1>
            <button onClick={() => setStartGame(true)}>iniciar Recall!</button>

        </section>
    ) : (
        <section className='game-body'>
            <header className="App-header">
                <img src={littleLogo} alt="Logo do ZapRecall" />
                <h1>ZapRecall</h1>
            </header>
            <FlashcardDeck />
        </section>
    )
}

export default TelaInicial;