import React from 'react';
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={s.FooterContainer} id="Contacts">
           <div className={s.FooterWrapper}>
               <h4>Kirill Kozlov</h4>
               <div className={s.FooterIMGWrapper}><a href="https://github.com/KIK9292"><img
                   src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                   alt="logo gitHub"/></a>
                   <a href="https://t.me/g5024"><img
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                       alt="logo Telegram"/></a>
                   <a href="https://m.vk.com/"><img
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png"
                       alt="logo Vk"/></a>
                   <a href="https://www.instagram.com/"><img
                       src="https://freelogopng.com/images/all_img/1658587303instagram-png.png"
                       alt="logo Instagram"/></a></div>
           </div>
        </footer>
    );
};

