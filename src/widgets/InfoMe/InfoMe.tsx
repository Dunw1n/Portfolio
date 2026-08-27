import { Calendar, GraduationCap, MapPin } from "lucide-react";
import Avatar from "@assets/main-section/avatar-widget.png";

import "./InfoMe.scss";


export const InfoMe = () => {
    return (
        <div className="app-welcome-info structure-class">
            <div className="app-welcome-info__head">
                <div className="app-welcome-info__avatar">
                    <img src={Avatar} alt="" />
                </div>

                <div className="app-welcome-info__text">
                    <h3>Гуляев Кирилл</h3>
                    <p>Full-stack разрабочик</p>
                </div>
            </div>

            <div className="app-welcome-info__list">
                <ul className="app-welcome-info__item">
                    <MapPin color="#A1A1AA"/>
                    <p>Россия, Краснодарский край, Анапа</p>
                </ul>
                <ul className="app-welcome-info__item">
                    <Calendar color="#A1A1AA"/>
                    <p>Опыт в сфере более 4-х лет</p>
                </ul>
                <ul className="app-welcome-info__item">
                    <GraduationCap color="#A1A1AA"/>
                     <p>Факультет разработки программного обеспечения</p>
                </ul>
            </div>
        </div>
    )
}