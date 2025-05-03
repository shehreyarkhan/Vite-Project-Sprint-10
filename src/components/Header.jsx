import headerLogo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="App logo" />
      <h1 className="header__title">Vitely</h1>
    </div>
  );
}

export default Header;