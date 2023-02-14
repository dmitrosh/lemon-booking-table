import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';

const Booking = ({availableTimes, setAvailableTimes, submitForm}) => {
  return (
      <div>
        <Header/>
        <section className="container">
          <BookingForm
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
          />
        </section>
        <Footer/>
      </div>
  );
};

export default Booking;
