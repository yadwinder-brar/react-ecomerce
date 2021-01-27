import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import { FaSearch,FaShoppingCart,FaUserAlt,FaTh,FaBars,FaSearchPlus } from 'react-icons/fa';
import {Container,Row,Col,Figure} from 'react-bootstrap';
import Header from './components/header.js'
import Baner from './components/baner.js';
import Slider2 from './components/slider2.js';
import Mainproduct from './components/mainproduct.js';
import Categories from './components/categories.js';
import Footer from './components/footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Header/>
        <Mainproduct/>
        <Slider2/>
        <Baner/>
        <Categories/>    
      <Footer/>

    </div>
  );
}

export default App;
