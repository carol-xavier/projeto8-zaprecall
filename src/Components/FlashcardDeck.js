import { useState } from 'react';
import Flashcards from './Flashcards';
import Footer from './Footer';

const questions = [{question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
{question: "Complete a frase: O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
{question: "Complete a frase: Componentes devem iniciar com __", answer: "letra maiúscula" },
{question: "Complete a frase: Podemos colocar __ dentro do JSX", answer: "expressões" },
{question: "Complete a frase: O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
{question: "Complete a frase: Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
{question: "Complete a frase: Usamos props para __", answer: "passar diferentes informações para componentes " },
{question: "Complete a frase: Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

function FlashcardDeck() {

  questions.sort(() => Math.random() - 0.5);

  const [answer, setAnswer] = useState([]);
  const [resultIcons, setResultIcons] = useState([]);

  return (
      <div>
        {questions.map((card, index) => {
          return <Flashcards 
          question={card} 
          index={index} 
          key={index}

          answer = {answer}
          callbackAnswer = {setAnswer}
          resultIcons= {resultIcons}
          callbackIcons = {setResultIcons}/>;
        })}
        <Footer total={questions.length} counter={answer.length} resultIcons = {resultIcons}/>
      </div>
      
  );
}

  export default FlashcardDeck;
