import React from 'react';
import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Community from './components/community/Community';
import Header from './components/header/Header';
import Load from './components/load/Load';
import Promo from './components/promo/Promo';
import Sale from './components/sale/Sale';
import Young from './components/young/Young';

function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />  
      <Young /> 
      <Load /> 
      <Community />
    </div>
  );
}

export default App;
