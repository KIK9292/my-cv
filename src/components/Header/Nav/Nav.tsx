import React from 'react';
import s from "./Nav.module.css"

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <span>Главная</span>
            <span>Скиллы</span>
            <span>Работы</span>
            <span>Контакты</span>
        </nav>
    );
};

