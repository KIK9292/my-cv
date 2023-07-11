import React from 'react';
import s from "./MyInfo.module.css"


export const Myinfo = () => {
    return (
        <div className={s.infoWrapper} id="Main">
            <div>
                <h2>Привет!</h2>
                <p>Меня зовут <h3><b>Кирилл Козлов.</b></h3>
                    Я front-end разработчик</p>
            </div>
            <img
                src="https://memepedia.ru/wp-content/uploads/2020/09/b2b7c451cbddc634ecc0dc37031fb4d6.jpg"
                alt="img"/>
        </div>
    );
};


