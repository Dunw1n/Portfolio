import { Calendar, GraduationCap, MapPin } from "lucide-react";
import Avatar from "@assets/main-section/avatar-widget.png";
import {motion} from "framer-motion"

import "./InfoMe.scss";


export const InfoMe = () => {
    return (
        <motion.div  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="app-welcome-info structure-class">
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
        </motion.div>
    )
}