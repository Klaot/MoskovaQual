import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Link, Routes , Route } from "react-router-dom";
import  Home  from './pages/Home';
import  Header  from './components/Header';
import './App.css';
import HomeFirstBlock from './components/HomeFirstBlock';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <section className="container">
            <nav className="navMenu">
                <Link to="/">Главная</Link>
                <Link to="/price">Услуги и цены</Link>
                <a href="#">Гарантия</a>
                <a href="#">Юр.лица</a>
                <a href="#">Контакты</a>
                <a href="#">Вопрос-ответ</a>
                <a href="#">Полезная информация</a>
            </nav>
        </section>
          <div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/price" element={<HomeFirstBlock />}/>
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
    </div>
    
  );
}

export default App;
