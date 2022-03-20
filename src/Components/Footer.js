import '../assets/style/style.css';
import { useState } from 'react';


function Footer(props) {
    const {total, counter} = props;

    return (
        <footer className='answer-counter'> 
        {counter}/{total}
      </footer>
    )
}

export default Footer;