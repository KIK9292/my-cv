import React from 'react';
import s from "./Contacs.module.css"

export const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <span><b>Контакты</b></span>
            <form action="" className={s.contactsWrapperForm}>
                <input type="text" placeholder={"Email"}/>
                <input type="text" placeholder={"Name Company"}/>
                <textarea name="text" id="" cols={10} rows={5} placeholder={"Message"}></textarea>
            </form>
            <button><b>Отправить</b></button>
        </div>
    );
};

