import './young.css'
import Card from '../card/Card';
import cat01Img from './../../img/images/young-01.jpg';
import youn02Img from './../../img/images/young-02.jpg';

const Young = () => {
   return (
      <section className="young">
         <div className="container">
            <div className="young__title">
               <h2 className="title-2">Young’s Favourite</h2>
            </div>
            <div className="young__cards">
               <Card title="Trending on instagram" img={cat01Img} />
               <Card title="All Under $40" img={youn02Img} />
            </div>
         </div>
      </section>
   );
}

export default Young;