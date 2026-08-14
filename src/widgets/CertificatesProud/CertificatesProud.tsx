import "./CertificatesProud.scss";

interface ICertificatesProud {
    imageProud: string; 
    textProud: string
}

export const CertificatesProud = ({ imageProud, textProud }: ICertificatesProud) => {
    return (
        <div className="app-awards-content">
            <h3>A Proud Moment</h3>
            <img src={imageProud} alt="" />
            <p>{textProud}</p>
        </div>
    )
}