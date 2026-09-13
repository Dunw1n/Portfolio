import "./ExperienceItem.scss";
import { motion } from "framer-motion";

interface IExperienceItem {
    title: string;
    subtitle: string;
    descr: string;
}

export const ExperienceItem = ({ title, subtitle, descr }: IExperienceItem) => {
    return (
        <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }} className="app-experience-item">
            <h3 className="app-experience-item__title">{title}</h3>
            <h5 className="app-experience-item__subtitle">{subtitle}</h5>
            <p className="app-experience-item__descr">{descr}</p>
        </motion.li>
    )
}