import '../assets/style/style.css';
import { useState } from 'react';


function Footer(props) {
    const {total, counter, resultIcons} = props;

    const icons = resultIcons.map((icon) => { return (<img className='footer-icons' src={icon} />); });

    return (
        <footer className='answer-counter'> 
        {counter}/{total} CONCLUÍDOS

        <div className="footer-icons">{icons}</div>     
      </footer>
    )
}

export default Footer;