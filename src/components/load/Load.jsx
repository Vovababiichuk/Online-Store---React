import './load.css'
import voucherImg from './../../img/images/vouchers-img.png'
import appImg from './../../img/icons/app-store.png'
import playImg from './../../img/icons/google-play.png'

const Load = () => {
   return (
      <section className='load'>
         <div className="container">
            <div className="load__inner">
               <div className="loader__content">
                  <div className="loader__title">
                     DOWNLOAD APP &
                     GET THE VOUCHER!
                  </div>
                  <div className="loader__text">
                     Get 30% off for first transaction using
                     Rondovision mobile app for now.
                  </div>
                  <div className="loader__links">
                     <a className="loader__link" href="https://www.apple.com/ua/app-store/" target='_blank'>
                        <img src={appImg} alt="App Store" />
                     </a>
                     <a className="loader__link" href="https://play.google.com/store/games?device=windows" target='_blank'>
                        <img src={playImg} alt="Google Pay" />
                     </a>
                  </div>
               </div>
               <img className="loader__img" src={voucherImg} alt="voucher" />
            </div>
         </div>
      </section>
   );
}

export default Load;