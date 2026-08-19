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
                    <h3>Kirill Gulaev</h3>
                    <p>Full-stack Web Developer</p>
                </div>
            </div>

            <div className="app-welcome-info__list">
                <ul className="app-welcome-info__item">
                    <MapPin color="#A1A1AA"/>
                    <p>Russian, Krasnodar</p>
                </ul>
                <ul className="app-welcome-info__item">
                    <Calendar color="#A1A1AA"/>
                    <p>Experience development 5 years</p>
                </ul>
                <ul className="app-welcome-info__item">
                    <GraduationCap color="#A1A1AA"/>
                     <p>Russian, Krasnodar</p>
                </ul>
            </div>
        </div>
    )
}