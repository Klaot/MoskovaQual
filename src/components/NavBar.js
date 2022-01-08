import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <BrowserRouter>
        <section class="container">
            <nav class="navMenu">
                <a href="#">Главная</a>
                <a href="#">Услуги и цены</a>
                <a href="#">Гарантия</a>
                <a href="#">Юр.лица</a>
                <a href="#">Контакты</a>
                <a href="#">Вопрос-ответ</a>
                <a href="#">Полезная информация</a>
            </nav> 
        </section>
        </BrowserRouter>
    )
}