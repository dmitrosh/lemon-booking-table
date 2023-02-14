import './App.css';
import {useReducer} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import {fetchAPI, submitAPI} from './server/api';
import Congrats from './pages/Congrats';
import Page404 from './pages/Page404';

function App() {

  function initializeTimes() {
    return {
      times: [...fetchAPI(new Date())],
    };
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return {times: [...newTimes]};
  }

  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      window.location.href = '/congrats';
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
      <div className="App">
        <Routes>
          <Route
              path="/"
              element={
                <Home/>
              }
          />
          <Route
              path="/booking"
              element={
                <Booking
                    availableTimes={availableTimes}
                    setAvailableTimes={setAvailableTimes}
                    submitForm={submitForm}
                />
              }
          />
          <Route
              path="/congrats"
              element={
                <Congrats/>
              }
          />
          <Route
              path="*"
              element={
                <Page404/>
              }
          />
        </Routes>
      </div>
  );
}

export default App;
