import React from 'react';
import s from "./MySkills.module.css"

export const MySkills = () => {
    return (
        <div className={s.MySkillWrapper}>
            <h2>My Skills</h2>
            <div className={s.SkillCard}>
                <div className={s.cardWrap}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1riXgeYoeUuTJbRNwHjwRNbFbGb_k_iU0sRNwZ5Ts0SlCnrbfHXwPD2ZrobtuRRLiTsg&usqp=CAU"
                        alt="ReactLogo"/>
                    <h3><b>React</b></h3>
                    <p>React — это популярная JavaScript библиотека, используемая для разработки пользовательских интерфейсов. Она позволяет создавать эффективные, масштабируемые и переиспользуемые компоненты, которые могут обновляться динамически при изменении данных.</p>
                </div>
                <div className={s.cardWrap}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1riXgeYoeUuTJbRNwHjwRNbFbGb_k_iU0sRNwZ5Ts0SlCnrbfHXwPD2ZrobtuRRLiTsg&usqp=CAU"
                        alt="ReactLogo"/>
                    <h3><b>React</b></h3>
                    <p>React — это популярная JavaScript библиотека, используемая для разработки пользовательских интерфейсов. Она позволяет создавать эффективные, масштабируемые и переиспользуемые компоненты, которые могут обновляться динамически при изменении данных.</p>
                </div>
                <div className={s.cardWrap}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1riXgeYoeUuTJbRNwHjwRNbFbGb_k_iU0sRNwZ5Ts0SlCnrbfHXwPD2ZrobtuRRLiTsg&usqp=CAU"
                        alt="ReactLogo"/>
                    <h3><b>React</b></h3>
                    <p>React — это популярная JavaScript библиотека, используемая для разработки пользовательских интерфейсов. Она позволяет создавать эффективные, масштабируемые и переиспользуемые компоненты, которые могут обновляться динамически при изменении данных.</p>
                </div>
            </div>

        </div>
    );
};

