import { useState } from 'react';
import FlashcardDeck from './FlashcardDeck';
import Header from './Header';
import Logo from '../assets/img/logo.png';

function FirstScreen() {

    const [startGame, setStartGame] = useState(false);


    return !startGame ? (
        <section className='home-page'>
            <img src={Logo} />
            <h1>ZapRecall</h1>
            <button onClick={() => setStartGame(true)}>Iniciar Recall!</button>

        </section>
    ) : (
        <section className='game-body'>
            <Header />
            <FlashcardDeck startGame={startGame} callbackFirstScreen={setStartGame}/>
        </section>
    )
}

export default FirstScreen;