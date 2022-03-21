import '../assets/style/style.css';
import { useState } from 'react';
import FirstScreen from './FirstScreen';
import Wrong from '../assets/img/wrong-icon.jpg';
import sadFace from '../assets/img/sad.png';
import happyFace from '../assets/img/party.png';


function Footer(props) {
  const { total, counter, resultIcons, callbackFirstScreen, startGame } = props;


  const icons = resultIcons.map((icon) => { return (<img className='footer-icons' src={icon} />); });
  const badResult = resultIcons.includes(Wrong);

  // if(restartGame){
  //   return <FirstScreen />
  // }

  if (counter === total) {
    if (badResult) {
      return <footer className='answer-result'>
        <div className='feedbackMsg'>
          <img src={sadFace} />
          <h1>Putz...</h1>
        </div>
        <p>Ainda faltam alguns... <br></br>
          Mas não desanime!</p>
        < div className="footer-icons" > {icons}</div >
        <button onClick={() => callbackFirstScreen(!startGame)}>REINICIAR RECALL</button>
      </footer>
    } else {
      return <footer className='answer-result'>
        <div className='feedbackMsg'>
          <img src={happyFace} />
          <h1>Parabéns!</h1>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
        < div className="footer-icons" > {icons}</div >
        <button onClick={() => callbackFirstScreen(!startGame)}>REINICIAR RECALL</button>
      </footer>
    }
  }

  return (
    <footer className='answer-result'>
      {counter} / {total} CONCLUÍDOS
      < div className="footer-icons" > {icons}</div >
    </footer >
  )
}

export default Footer;

