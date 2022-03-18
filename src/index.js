import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

Renderizar();
function Renderizar(){
    ReactDOM.render(
          <App />,
        document.getElementById('root')
      );
}

export default Renderizar;


