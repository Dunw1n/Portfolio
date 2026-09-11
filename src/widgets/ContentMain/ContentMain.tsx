import { ArrowRight } from "lucide-react";
import "./ContentMain.scss";

export const ContentMain = () => {
    return (
        <>
            <div className="app-welcome-title">
                <h1 className="app-welcome-title__text">
                    Портфолио 
                    <span>разработчика</span>
                </h1>
            </div>

            <div className="app-welcome-descr">
                <span>
                    Увлеченный студент, изучающий программное обеспечение и специализирующийся на создании эффективных, ориентированных на пользователя веб-приложений.
                </span>
            </div> 
            
            <div className="app-welcome-btn">
                <a href="#projects" className="app-welcome-btn__click one-button">
                    <p>К моим проектам</p>
                    <ArrowRight />
                </a>

                <a href="#about" className="app-welcome-btn__click two-button">
                    <p>Связаться со мной</p>
                </a>
            </div>


        </>
       
    )
}