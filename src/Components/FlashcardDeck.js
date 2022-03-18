import React from 'react';
import App from './App';
import Flashcards from './Flashcards';

const questions = [{ id: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
{ id: 2, question: "Complete a frase: O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
{ id: 3, question: "Complete a frase: Componentes devem iniciar com __", answer: "letra maiúscula" },
{ id: 4, question: "Complete a frase: Podemos colocar __ dentro do JSX", answer: "expressões" }
]


function FlashcardDeck() {
    return (
        <div>
          {questions.map(card => {
            const { id, question, answer } = card;
            return <Flashcards id={`Pergunta ${id}`} question={question} answer={answer} />;
          })}
        </div>
    );
  }

  export default FlashcardDeck;
