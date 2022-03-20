import littleLogo from '../assets/img/logo-pequeno.png';

function Header(){
    return(
      <header className="App-header">
      <img src={littleLogo} alt="Logo do ZapRecall" />
      <h1>ZapRecall</h1>
    </header>
    )
}

export default Header;