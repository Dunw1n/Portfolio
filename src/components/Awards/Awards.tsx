import { TitleSection } from "@widgets/TitleSection/TitleSection"
import { TopBlock } from "@widgets/TopBlock/TopBlock"
import ImageAwards from "@assets/KRIT.jpg";



import "./Awards.scss";
import { CertificatesItem } from "@widgets/CertificatesItem/CertificatesItem";
import { CertificatesProud } from "@widgets/CertificatesProud/CertificatesProud";

import { motion } from "framer-motion";

export const Awards = () => {
    return (
        <div className="app-awards">
            <div className="container">
                <div className="app-awards-wrapper section-wrapper">

                    <TopBlock textContent={"Достижения"}/>
                    <TitleSection textContent={"Сертификаты и достижения"}/>


                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }}>
                        <CertificatesProud imageProud={ImageAwards} textProud={"Участник всероссийского конкурса KRIT-2024 в сфере веб-разработки"}/>
                    </motion.div>

                    <h3 className="app-awards-title">Некоторые сертификаты</h3>

                    <motion.ul initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }} className="app-awards-certificates">
                        <CertificatesItem nameCertificate={"Сертификат номер один"} imageCertificate={ImageAwards}/>
                        <CertificatesItem nameCertificate={"Сертификат номер два"} imageCertificate={ImageAwards}/>
                        <CertificatesItem nameCertificate={"Сертификат номер три"} imageCertificate={ImageAwards}/>
                    </motion.ul>

                </div>
            </div>
        </div>
    )
}