import '../assets/style/style.css';
import { useState } from 'react';
import Wrong from '../assets/img/wrong-icon.jpg';
import sadFace from '../assets/img/sad.png';
import happyFace from '../assets/img/party.png';


function Footer(props) {
  const { total, counter, resultIcons } = props;

  const icons = resultIcons.map((icon) => { return (<img className='footer-icons' src={icon} />); });
  const badResult = resultIcons.includes(Wrong);

  if (counter === total) {
    if (badResult) {
      return <footer className='answer-result'>
        <img src={sadFace} />
        <h1>Putz...</h1>
        <p>Ainda faltam alguns...
          Mas não desanime!</p>
      </footer>
    } else {
      return <footer className='answer-result'>
        <img src={happyFace} />
        <h1>Parabéns!</h1>
        <p>Você não esqueceu de nenhum flashcard!</p>
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

