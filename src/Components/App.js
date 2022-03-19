import React from 'react';
import '../assets/style/style.css';

import littleLogo from '../assets/img/logo-pequeno.png';
import FlashcardDeck from './FlashcardDeck';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={littleLogo} alt="Logo do ZapRecall" />
        <h1>ZapRecall</h1>
      </header>

    {FlashcardDeck()}

      <footer className='answer-counter'> 
        0/Total Concluídos
      </footer>
    </div>
  );
}

export default App;
