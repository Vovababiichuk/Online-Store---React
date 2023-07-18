import logoImg from './../../img/icons/logo.svg'
import './header.css'

function Header () {
   return (
      <header className="header">
         <div className="container">
            <div className="header__row">
               <div className="header__logo">
                  <img src={logoImg} alt="Logo" />
                  <span>Fashion</span>
               </div>
               <nav className="header__nav">
                  <ul>
                     <li><a className="header__nav-link" href="#!">CATALOGUE</a></li>
                     <li><a className="header__nav-link" href="#!">FASHION</a></li>
                     <li><a className="header__nav-link" href="#!">FAVOURITE</a></li>
                     <li><a className="header__nav-link" href="#!">LIFESTYLE</a></li>
                     <button href="#!" className="header__nav-btn">SIGN UP</button>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header;
