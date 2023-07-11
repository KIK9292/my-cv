import React from 'react';
import s from './MyProjects.module.css'

export const MyProjects = () => {
    return (
        <div className={s.MyProjectsWrapper} id="Works">
            <span><h3><b>Мои Работы</b></h3></span>
            <div className={s.MyProjectsCard}>
                <div><img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt=""/>
                    <p>Название проекта</p>
                    <p> Описаниие</p>
                </div>
                <div><img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt=""/>
                    <p>Название проекта</p>
                    <p> Описаниие</p>
                </div>
            </div>
        </div>
    );
};

