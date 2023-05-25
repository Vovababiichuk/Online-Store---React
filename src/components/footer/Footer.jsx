import './footer.css'
import footerlogoImg from './../../img/fashion.png'

import facebookIcon from './../../img/socials/fb.svg';
import twitterIcon from './../../img/socials/tw.svg';
import instagramIcon from './../../img/socials/in.svg';
import linkedinIcon from './../../img/socials/in.svg';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__content">
               <div className="footer__info">
                  <a className="footer__logo" href="#!">
                     <img src={footerlogoImg} alt="logo" />
                  </a>
                  <p className="footer__text">
                     Complete your style with awesome clothes from us.
                  </p>
                  <ul className="footer__social">
                     <li className='footer__social-item'>
                        <a className='footer__social-link' href="#!">
                           <span className="sr-only"></span>
                           <span className="footer__social-icon" style={{ backgroundImage: `url(${facebookIcon})` }}></span>
                        </a>
                     </li>
                     <li className='footer__social-item'>
                        <a className='footer__social-link' href="#!">
                           <span className="sr-only"></span>
                           <span className="footer__social-icon" style={{ backgroundImage: `url(${twitterIcon})` }}></span>
                        </a>
                     </li>
                     <li className='footer__social-item'>
                        <a className='footer__social-link' href="#!">
                           <span className="sr-only"></span>
                           <span className="footer__social-icon" style={{ backgroundImage: `url(${instagramIcon})` }}></span>
                        </a>
                     </li>
                     <li className='footer__social-item'>
                        <a className='footer__social-link' href="#!">
                           <span className="sr-only"></span>
                           <span className="footer__social-icon" style={{ backgroundImage: `url(${linkedinIcon})` }}></span>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="footer__links">
                  <ul className="footer__list">
                     <li className="footer__title">
                        Company
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">About</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Contact us</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Support</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Careers</a>
                     </li>
                  </ul>
               </div>
               <div className="footer__links">
                  <ul className="footer__list">
                     <li className="footer__title">
                        Quick Link
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Share Location</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Orders Tracking</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Size Guide</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">FAQs</a>
                     </li>
                  </ul>
               </div>
               <div className="footer__links">
                  <ul className="footer__list">
                     <li className="footer__title">
                        Legal
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Terms & conditions</a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="#!">Privacy Policy</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;