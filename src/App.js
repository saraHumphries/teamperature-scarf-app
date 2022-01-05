import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LandingPage from "./components/Landing";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchApiData('2022-01-01');
  }, []);

  const fetchApiData = (date) => {
    fetch(`https://api.weatherapi.com/v1/history.json?key=dbdf40f685a9446e9c3144301220501&q&q=Edinburgh&dt=${date}`)
      .then(result => result.json())
      .then(res => setWeatherData(res));
  };

  return (
    <div>
      <Header></Header>
      <Router>
      
          <Routes>
            <Route path='/' element={ <LandingPage weatherData={weatherData}></LandingPage> }></Route>
          </Routes>
      
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
