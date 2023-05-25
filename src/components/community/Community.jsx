import './community.css'
import React, { useState } from 'react';

const Community = () => {
   return (
      <section className="community">
         <div className="container">
            <div className="community__content">
               <h2 className='community__title'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
               <p className='community__text'>Type your email down below and be young wild generation</p>
               <EmailForm />
            </div>
         </div>
      </section>
   );
}

function EmailForm() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      // Perform form submission logic here
      console.log('Form submitted:', name, email, message);
   };

   return (

      <form className="community__form" onSubmit={handleSubmit}>
         <label htmlFor="email"></label>
         <input className="community__input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Add your email here'
            required
         />
         <button className="community__button" type="submit">Send</button>
      </form>

   );
}

export default Community;
