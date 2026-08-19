import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"
import ImageAwards from "../../assets/about-me-photo.jpg";



import "./Awards.scss";
import { CertificatesItem } from "../../widgets/CertificatesItem/CertificatesItem";
import { CertificatesProud } from "../../widgets/CertificatesProud/CertificatesProud";

export const Awards = () => {
    return (
        <div className="app-awards">
            <div className="container">
                <div className="app-awards-wrapper section-wrapper">

                    <TopBlock textContent={"Recognition & Accomplishments"}/>
                    <TitleSection textContent={"Awards & Achievements"}/>



                    <CertificatesProud imageProud={ImageAwards} textProud={"Receiving the design award at Ton Duc Thang University, 2023."}/>


                    <h3 className="app-awards-title">Extracurricular Certificates</h3>

                    <ul className="app-awards-certificates">
                        <CertificatesItem nameCertificate={"Chứng nhận: Vibe Coding"} imageCertificate={ImageAwards}/>
                        <CertificatesItem nameCertificate={"Chứng nhận: Vibe Coding"} imageCertificate={ImageAwards}/>
                        <CertificatesItem nameCertificate={"Chứng nhận: Vibe Coding"} imageCertificate={ImageAwards}/>
                    </ul>

                </div>
            </div>
        </div>
    )
}