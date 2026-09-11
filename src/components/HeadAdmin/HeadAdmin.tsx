import { LayoutTemplate, Settings, Star } from "lucide-react"
import Avatar from "@assets/about-me-photo.jpg";

import "./HeadAdmin.scss";
import { useState } from "react";

const listSections = [
    { id: 0, section_name: "Первая секция (Welcome)" },
    { id: 1, section_name: "Вторая секция (AboutMe)" },
    { id: 2, section_name: "Третья секция (Skills)" },
    { id: 3, section_name: "Четвертая секция (Projects)" },
    { id: 4, section_name: "Пятая секция (Awards)" },
    { id: 5, section_name: "Шестая секция (Experience)" },
    { id: 6, section_name: "Седьмая секция (Blog)" },
    { id: 7, section_name: "Футер" },
];

export const HeadAdmin = () => {
    const [isActivePanel, setIsActivePanel] = useState<boolean>(false);

    


    const togglePanelState = () => {
        setIsActivePanel(!isActivePanel)
    }

    return (
        <div className={`app-head ${isActivePanel ? "app-head-active" : ""}`} style={isActivePanel ? { background: "#00000046" } : {}}>
            <div className="container">
                <div className="app-head-wrapper">
                    <div className="app-head-text">
                        <h3>WebDev</h3>
                        <p>Административная панель портфолио | Версия 0.1</p>
                    </div>
                    <div className="app-head-management">
                        <button className="app-head-management__button" onClick={() => togglePanelState()}>
                            <Settings/>
                        </button>
                        <button className="app-head-management__button">
                            <img src={Avatar} alt="" />
                        </button>
                    </div>
                </div>

                <div className={`app-head-panel ${isActivePanel ? "app-head-panel__active" : ""}`}>

                    <div className="app-head-panel__list">
                        <h3 className="app-head-panel__title">Список изменяемых секций</h3>

                        { listSections.map((item) => (
                            <div key={item.id} className="app-head-panel__item">
                                <LayoutTemplate color="#fff" />
                                <p>{ item.section_name }</p>
                            </div>
                        )) }

                        <div className="app-head-panel__item">
                            <Star color="#fff" />
                            <p>Создать новую статью в Blog</p>
                        </div>

                    </div>
                    <div className="app-head-panel__work">
                        <h3 className="app-head-panel__descr">Поля для изменения контента выбранной секции</h3>


                        <div className="app-head-panel__work_wrapper">
                            <div className="app-head-panel__work_item">
                                <h5>Заголовок начало</h5>
                                <textarea placeholder="Портфолио"/>
                            </div>
                            <div className="app-head-panel__work_item">
                                <h5>Заголовок в span</h5>
                                <textarea placeholder="разработчика" />
                            </div>
                            <div className="app-head-panel__work_item">
                                <h5>Описание под заголовком</h5>
                                <textarea placeholder="Увлеченный студент, изучающий программное обеспечение и специализирующийся на создании эффективных, ориентированных на пользователя веб-приложений."/>
                            </div>
                            <div className="app-head-panel__work_item">
                                <h5>Первая кнопка</h5>
                                <textarea placeholder="К моим проектам" />
                            </div>
                            <div className="app-head-panel__work_item">
                                <h5>Вторая кнопка</h5>
                                <textarea placeholder="Связаться со мной" />
                            </div>
                        </div>

                        <button className="app-head-panel__work_apply">Сохранить изменения</button>
                    </div>

                </div>
            </div>
        </div>
    )
}