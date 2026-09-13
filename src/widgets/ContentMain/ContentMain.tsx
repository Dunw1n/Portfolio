import { ArrowRight } from "lucide-react";
import "./ContentMain.scss";

import { motion } from "framer-motion";

export const ContentMain = () => {
    return (
        <>
            <div className="app-welcome-title">
                <motion.h1  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} className="app-welcome-title__text">
                    Портфолио 
                    <span>разработчика</span>
                </motion.h1>
            </div>

            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeInOut' }} className="app-welcome-descr">
                <span>
                    Увлеченный студент, изучающий программное обеспечение и специализирующийся на создании эффективных, ориентированных на пользователя веб-приложений.
                </span>
            </motion.div> 
            
            <div className="app-welcome-btn">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
                     <a href="#projects" className="app-welcome-btn__click one-button">
                        <p>К моим проектам</p>
                        <ArrowRight />
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeInOut' }}>
                    <a href="#about" className="app-welcome-btn__click two-button">
                        <p>Связаться со мной</p>
                    </a>
                </motion.div>
               

               
            </div>


        </>
       
    )
}