import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes , Route, NavLink } from "react-router-dom";
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
import QuestionAndAnswer from './pages/QuestionAndAnswer/QuestionAndAnswer';
import ErrorCodes from './pages/HelpfulInformation/ErrorCodes';
import BOSCH from './pages/HelpfulInformation/Errors/BOSCH';
import INDESIT from './pages/HelpfulInformation/Errors/INDESIT';
import HAIER from './pages/HelpfulInformation/Errors/HEIER';
import ArrowUp from '../src/img/REVIEWS/arrow.png';



const App = () => {

  const [show, setShow] = useState(true)
  const [showBtnScroll, setShowBtnScroll] = useState(true)


  const toggleMenu = () => {
    setShow(!show);
  }


  const scrollPage = (e) => {
    if (window.scrollY <= 1000) {
        setShowBtnScroll(true);
    } else {
        setShowBtnScroll(false)
    }
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollPage );
    return () => window.removeEventListener('scroll', scrollPage );
  }, [])
  

  return (
    <div onScroll={scrollPage} className="App">
      <Header />
      <BrowserRouter>
          <button id='scroll-up-btn' className={showBtnScroll ? 'hidden-btn-up' : 'show-btn-up'} onClick={scrollUp}>
            {/* <span className="arrowUp">Вверх</span> */}
            <img className="arrowUp" src={ArrowUp} width="20" height="20" alt='arrowUp' />
            <span className="btn-rings"></span>
            <span className="btn-rings"></span>
            <span className="btn-rings"></span>
          </button>
        <section className="container" onClick={() => setShow(false)}>
            <div className='burger-btn-container' onClick={e => e.stopPropagation()}>
                <button className= {show ?  'burger-btn active-btn' : 'burger-btn'} onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
            </div>
            <nav className= {show ? 'navMenu show' : 'navMenu hidden'} onClick={e=>e.stopPropagation()} >
                <NavLink to="/"><b>Главная</b></NavLink>
                <NavLink to="/price"><b>Услуги и цены</b></NavLink>
                <NavLink to="/guarantee"><b>Гарантия</b></NavLink>
                <NavLink to="/forlawyers"><b>Юр.лица</b></NavLink>
                <NavLink to="/contacts"><b>Контакты</b></NavLink>
                <NavLink to="/questionandanswer"><b>Вопрос-ответ</b></NavLink>
                <NavLink to="/helpfulInformation"><b>Полезная информация</b></NavLink>   
            </nav>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/price" element={<ServicesAndPrices />}/>
                    <Route exact path="/guarantee" element={<Guarantee />}/>
                    <Route exact path="/forlawyers" element={<ForLawyers />}/>
                    <Route exact path="/contacts" element={<Contacts />}/>
                    <Route exact path="/questionandanswer" element={<QuestionAndAnswer />}/>
                    <Route exact path="/helpfulInformation/*" element={<HelpfulInformation />}>  
                    </Route>
                      <Route exact path='/AdditionalInformation' element={<HistoryAndCompatibility />}/>
                      <Route exact path='/ErrorCodes' element={<ErrorCodes />}/>
                      <Route exact path='/ErrorCodes/BOSCH' element={<BOSCH />}/>
                      <Route exact path='/ErrorCodes/INDESIT' element={<INDESIT />}/>
                      <Route exact path='/ErrorCodes/HAIER' element={<HAIER />}/>
                    <Route/>
                </Routes>
        </section>
          
        </BrowserRouter>
        <Footer />
    </div>
    
  );
}

export default App;
