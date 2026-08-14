import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"
import ImageAwards from "../../assets/about-me-photo.jpg";



import "./Awards.scss";
import { CertificatesItem } from "../../widgets/CertificatesItem/CertificatesItem";
import { CertificatesProud } from "../../widgets/CertificatesProud/CertificatesProud";
import { AwardsPrizeItem } from "../../widgets/AwardsPrizeItem/AwardsPrizeItem";

export const Awards = () => {
    return (
        <div className="app-awards">
            <div className="container">
                <div className="app-awards-wrapper section-wrapper">

                    <TopBlock textContent={"Recognition & Accomplishments"}/>
                    <TitleSection textContent={"Awards & Achievements"}/>


                    <div className="app-awards-prize">
                        <div className="app-awards-prize__text">
                            <h5 className="app-awards-prize__date">April 2023</h5>
                            <h3 className="app-awards-prize__title">Consolation Prize</h3>

                            <p className="app-awards-prize__info">'Class Website Design Competition 2023'</p>

                            <p className="app-awards-prize__description">Faculty of Information Technology, Ton Duc Thang University</p>
                        </div>

                        <ul className="app-awards-prize__descr">
                            <AwardsPrizeItem descrPrize={"Achieved prize in a university-wide competition with over 20 participating teams, as part of the 'Youth Pioneering Digital Transformation' initiative."}/>
                            <AwardsPrizeItem descrPrize={"Achieved prize in a university-wide competition with over 20 participating teams, as part of the 'Youth Pioneering Digital Transformation' initiative."}/>
                            <AwardsPrizeItem descrPrize={"Achieved prize in a university-wide competition with over 20 participating teams, as part of the 'Youth Pioneering Digital Transformation' initiative."}/>
                        </ul>
                    </div>


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