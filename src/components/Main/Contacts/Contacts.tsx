import React from 'react';
import s from "./Contacs.module.css"

export const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <span><b>Контакты</b></span>
            <form action="" className={s.contactsWrapperForm}>
                <input type="text"/>
                <input type="text"/>
                <textarea name="text" id="" cols={10} rows={5}></textarea>
            </form>
            <button><b>Отправить</b></button>
        </div>
    );
};

