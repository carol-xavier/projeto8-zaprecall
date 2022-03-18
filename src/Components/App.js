import React from 'react';
import littleLogo from '../assets/img/logo-pequeno.png';
import '../assets/style/style.css';
import Flashcards from './FlashcardDeck';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={littleLogo} alt="Logo do ZapRecall" />
        <h1>ZapRecall</h1>
      </header>

    {Flashcards()}

      <footer className='answer-counter'> 
        0/Total Concluídos
      </footer>
    </div>
  );
}

export default App;
