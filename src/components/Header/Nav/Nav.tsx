import React from 'react';
import s from "./Nav.module.css"

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <a href={"#Main"}>Главная</a>
            <a href={"#Skills"}>Скиллы</a>
            <a href={"#Works"}>Работы</a>
            <a href={"#Contacts"}>Контакты</a>
        </nav>
    );
};

