import "./AboutText.scss";
import { motion } from "framer-motion"


interface IAboutText {
    textOne: string;
    textTwo: string;
}

export const AboutText = ({ textOne, textTwo }: IAboutText) => {
    return (
        <>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }} className="app-about-info__text">
                {textOne}
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} className="app-about-info__text">
                {textTwo}
            </motion.p>
        </>
    )
}