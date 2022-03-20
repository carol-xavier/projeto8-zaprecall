import React from 'react';
import '../assets/style/style.css';
import littleLogo from '../assets/img/logo-pequeno.png';
import FlashcardDeck from './FlashcardDeck';
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={littleLogo} alt="Logo do ZapRecall" />
        <h1>ZapRecall</h1>
      </header>

    <FlashcardDeck/>
    </div>
  );
}

export default App;
