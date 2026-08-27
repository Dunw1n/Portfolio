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
                    Увлеченный студент, изучающий программную инженерию и специализирующийся на создании эффективных, ориентированных на пользователя веб-приложений.
                </span>
            </div> 
            
            <div className="app-welcome-btn">
                <button className="app-welcome-btn__click one-button">
                    <p>К проектам</p>
                    <ArrowRight />
                </button>

                <button className="app-welcome-btn__click two-button">
                    <p>Связаться</p>
                </button>
            </div>


        </>
       
    )
}