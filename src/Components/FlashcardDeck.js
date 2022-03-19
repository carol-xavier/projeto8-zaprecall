import React from 'react';
import Flashcards from './Flashcards';

const questions = [{question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
{question: "Complete a frase: O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
{question: "Complete a frase: Componentes devem iniciar com __", answer: "letra maiúscula" },
{question: "Complete a frase: Podemos colocar __ dentro do JSX", answer: "expressões" }
]


function FlashcardDeck() {

  questions.sort(() => Math.random() - 0.5);
 
  return (
      <div>
        {questions.map(card => {
          const {question, answer } = card;
          return <Flashcards question={question} answer={answer} />;
        })}
      </div>
  );
}

  export default FlashcardDeck;
