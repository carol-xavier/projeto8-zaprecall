import { useState } from 'react';
import Flashcards from './Flashcards';
import Footer from './Footer';

const questions = [{question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
{question: "Complete a frase: O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
{question: "Complete a frase: Componentes devem iniciar com __", answer: "letra maiúscula" },
{question: "Complete a frase: Podemos colocar __ dentro do JSX", answer: "expressões" }
]


function FlashcardDeck() {

  questions.sort(() => Math.random() - 0.5);

  const [answer, setAnswer] = useState([]);

 
  return (
      <div>
        {questions.map((question, index) => {
          return <Flashcards 
          question={question} 
          index={index} 
          key={index}

          answer = {answer} 
          callback = {setAnswer}/>;
        })}
        <Footer total={questions.length} counter={answer.length} />
      </div>
      
  );
}

  export default FlashcardDeck;
