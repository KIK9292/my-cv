import React from 'react';
import s from "./MySkills.module.css"

export const MySkills = () => {
    return (
        <div className={s.MySkillWrapper} id="Skills">
            <h2>My Skills</h2>
            <div className={s.SkillCard}>
                <div className={s.cardWrap}>
                    <img
                        src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
                        alt="ReactLogo"/>
                    <h3><b>React</b></h3>
                    <p>React — это популярная JavaScript библиотека, используемая для разработки пользовательских интерфейсов. Она позволяет создавать эффективные, масштабируемые и переиспользуемые компоненты, которые могут обновляться динамически при изменении данных.</p>
                </div>
                <div className={s.cardWrap}>
                    <img
                        src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg"
                        alt="ReduxLogo"/>
                    <h3><b>Redux</b></h3>
                    <p>Redux — это инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях JavaScript с большим количеством сущностей. Представляет собой библиотеку JavaScript.</p>
                </div>
                <div className={s.cardWrap}>
                    <img
                        src="https://www.svgrepo.com/show/303600/typescript-logo.svg"
                        alt="TSLogo"/>
                    <h3><b>TypeScript </b></h3>
                    <p>TypeScript — это язык программирования, в котором исправлены многие недостатки JavaScript. Код на TypeScript выглядит почти так же, как и код на JS, и, если у вас есть опыт frontend-разработки, изучить TypeScript достаточно просто. Особенно учитывая, что вы можете писать JS-код прямо в TS-скриптах.</p>
                </div>
            </div>

        </div>
    );
};

