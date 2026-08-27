import { TitleSection } from "@widgets/TitleSection/TitleSection"
import { TopBlock } from "@widgets/TopBlock/TopBlock"
import ImageAwards from "@assets/about-me-photo.jpg";



import "./Awards.scss";
import { CertificatesItem } from "@widgets/CertificatesItem/CertificatesItem";
import { CertificatesProud } from "@widgets/CertificatesProud/CertificatesProud";

export const Awards = () => {
    return (
        <div className="app-awards">
            <div className="container">
                <div className="app-awards-wrapper section-wrapper">

                    <TopBlock textContent={"Достижения"}/>
                    <TitleSection textContent={"Сертификаты и достижения"}/>



                    <CertificatesProud imageProud={ImageAwards} textProud={"Участник всероссийского конкурса KRIT-2024 в сфере веб-разработки"}/>


                    <h3 className="app-awards-title">Некоторые сертификаты</h3>

                    <ul className="app-awards-certificates">
                        <CertificatesItem nameCertificate={"Сертификат номер один"} imageCertificate={ImageAwards}/>
                        <CertificatesItem nameCertificate={"Сертификат номер два"} imageCertificate={ImageAwards}/>
                        <CertificatesItem nameCertificate={"Сертификат номер три"} imageCertificate={ImageAwards}/>
                    </ul>

                </div>
            </div>
        </div>
    )
}