import React from 'react';

import { BrowserRouter, Link, Routes , Route } from "react-router-dom";
import  Home  from './pages/Home/Home';
import  Header  from './components/Header';
import './App.css';
import Footer from './components/Footer';
import ServicesAndPrices from './pages/ServicesAndPrices/ServicesAndPrices';
import Guarantee from './pages/Guarantee/Guarantee';
import ForLawyers from './pages/ForLawyers/ForLawyers';
import Contacts from './pages/Сontacts/Сontacts';
import HelpfulInformation from './pages/HelpfulInformation/HelpfulInformation';
import HistoryAndCompatibility from './pages/HelpfulInformation/HistoryAndCompatibility';


const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <section className="container">
            <nav className="navMenu">
                <Link to="/"><b>Главная</b></Link>
                <Link to="/price"><b>Услуги и цены</b></Link>
                <Link to="/guarantee"><b>Гарантия</b></Link>
                <Link to="/forlawyers"><b>Юр.лица</b></Link>
                <Link to="/contacts"><b>Контакты</b></Link>
                <a href="#"><b>Вопрос-ответ</b></a>
                <Link to="/helpfulInformation"><b>Полезная информация</b></Link>   
            </nav>
        </section>
          <div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/price" element={<ServicesAndPrices />}/>
                <Route exact path="/guarantee" element={<Guarantee />}/>
                <Route exact path="/forlawyers" element={<ForLawyers />}/>
                <Route exact path="/contacts" element={<Contacts />}/>
                <Route exact path="/helpfulInformation/*" element={<HelpfulInformation />}></Route>
                  <Route exact path='/AdditionalInformation' element={<HistoryAndCompatibility />}/>
                <Route/>
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
    </div>
    
  );
}

export default App;
