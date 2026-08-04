import "./AboutText.scss";


interface IAboutText {
    textOne: string;
    textTwo: string;
}

export const AboutText = ({ textOne, textTwo }: IAboutText) => {
    return (
        <>
            <p className="app-about-info__text">
                {textOne}
            </p>
            <p className="app-about-info__text">
                {textTwo}
            </p>
        </>
    )
}