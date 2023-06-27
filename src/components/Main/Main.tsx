import React from 'react';
import {Myinfo} from "./MyInfo/Myinfo";
import {MySkills} from "./MySkills/MySkills";
import {MyProjects} from "./MyProjects/MyProjects";
import {Offers} from "./Offers/Offers";
import {Contacts} from "./Contacts/Contacts";
import s from "./Main.module.css"

export const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={`${s.Container} ${s.myInfoContainer}`}><Myinfo/></div>
            <div className={`${s.Container} ${s.mySkillsContainer}`}><MySkills/></div>
            <div className={`${s.Container} `}><MyProjects/></div>
            <div className={`${s.Container} `}><Offers/></div>
            <div className={`${s.Container} `}><Contacts/></div>
</div>
            )
            }

