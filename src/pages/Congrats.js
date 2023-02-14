import React from 'react';
import SuccessIcon from '../images/check.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Congrats = () => {
  return (
      <>
        <Header/>
        <div className="congrats">
          <div className="container">
            <h1>Your have reserved table successfully!</h1>
            <img src={SuccessIcon} alt="Approval" width="50"/>
          </div>
        </div>
        <Footer/>
      </>
  );
};

export default Congrats;
