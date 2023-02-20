import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      
       
      

    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} /> */}
     
     
    </Routes>
  </Router>

  );
}

export default App;
