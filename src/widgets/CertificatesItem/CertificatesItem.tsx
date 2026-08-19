import ViewIcon from "@assets/awards-section/Symbol.png";


import "./CertificatesItem.scss";

interface ICertificatesItem {
    nameCertificate: string;
    imageCertificate: string;
}

export const CertificatesItem = ({ nameCertificate, imageCertificate }: ICertificatesItem) => {
    return (
         <li className="app-awards-certificates__item">
            <div className="app-awards-certificates__img">
                <img src={imageCertificate} alt="" />
            </div>

            <h5 className="app-awards-certificates__title">{nameCertificate}</h5>

            <button className="app-awards-certificates__view">
                <p>View Certificate</p>
                <img src={ViewIcon} alt="" />
            </button>
        </li>
    )
}