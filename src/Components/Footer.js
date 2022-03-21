import '../assets/style/style.css';
import { useState } from 'react';
import Wrong from '../assets/img/wrong-icon.jpg';
import sadFace from '../assets/img/sad.png';
import happyFace from '../assets/img/party.png';


function Footer(props) {
  const { total, counter, resultIcons } = props;

  const icons = resultIcons.map((icon) => { return (<img className='footer-icons' src={icon} />); });
  const badResult = resultIcons.includes(Wrong);
  const [finish, setFinish] = useState(false);

  if(counter === total){
    setFinish(true);
  }

  return (
    <footer className='answer-counter'>
      {finish ?? (badResult === true ?
        <div>
          <img src={sadFace} />
          <h1>Putz...</h1>
          <p>Ainda faltam alguns... <br></br>
            Mas não desanime!</p>
        </div> :
        <div>
          <img src={happyFace} />
          <h1>Parabéns!</h1>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </div>)}

      {counter}/{total} CONCLUÍDOS

      <div className="footer-icons">{icons}</div>
    </footer>
  )
}

export default Footer;

