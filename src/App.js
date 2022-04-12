import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Link, Routes , Route } from "react-router-dom";
import  Home  from './pages/Home/Home';
import  Header  from './components/Header';
import './App.css';
import Footer from './components/Footer';
import ServicesAndPrices from './pages/ServicesAndPrices/ServicesAndPrices';
import Guarantee from './pages/Guarantee/Guarantee';
import ForLawyers from './pages/ForLawyers/ForLawyers';
import Contacts from './pages/Сontacts/Сontacts';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <section className="container">
            <nav className="navMenu">
                <Link to="/">Главная</Link>
                <Link to="/price">Услуги и цены</Link>
                <Link to="/guarantee">Гарантия</Link>
                <Link to="/forlawyers">Юр.лица</Link>
                <Link to="/contacts">Контакты</Link>
                <a href="#">Вопрос-ответ</a>
                <a href="#">Полезная информация</a>
            </nav>
        </section>
          <div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/price" element={<ServicesAndPrices />}/>
                <Route exact path="/guarantee" element={<Guarantee />}/>
                <Route exact path="/forlawyers" element={<ForLawyers />}/>
                <Route exact path="/contacts" element={<Contacts />}/>
                
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
    </div>
    
  );
}

export default App;
