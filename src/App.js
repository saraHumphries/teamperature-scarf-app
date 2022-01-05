import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import LandingPage from "./components/Landing";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  

  return (
    <div>
      <Header></Header>
      <Router>
      
          <Routes>
            <Route path='/' element={ <LandingPage></LandingPage> }></Route>
          </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
