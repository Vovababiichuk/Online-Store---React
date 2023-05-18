import './sale.css'
import saleImg from './../../img/images/sale-img.png'

const Sale = () => {
   return (
      <section className="sale">
         <div className="container">
            <div className="sale__inner">
               <img src={saleImg} alt="sale payday" />
               <div className="sale__content">
                  <div className="sale__title">       
                     <span className="sale__highlight">
                        <span>PAYDAY</span>
                     </span>
                     SALE NOW
                  </div>
                  <div className="sale__text">
                     <p className="sale__voucher">Spend minimal $100 get 30% off
                        voucher code for your next purchase</p>
                     <span className="sale__date">1 June - 10 June 2021</span>
                     <span className="sale__apply">*Terms & Conditions apply</span>
                     <button className="sale__btn">SHOP NOW</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Sale;