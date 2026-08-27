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
            <p className="app-awards-certificates__descr">
                Описание сертификата, за что дали где учавствовал и дата выдачи
            </p>

            <button className="app-awards-certificates__view">
                <p>Посмотреть сертификат</p>
                <img src={ViewIcon} alt="" />
            </button>
        </li>
    )
}