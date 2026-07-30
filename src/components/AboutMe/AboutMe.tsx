import "./AboutMe.scss";

import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"
import { Download } from "lucide-react";


import AboutMePhoto from "../../assets/about-me-photo.jpg";

export const AboutMe = () => {
    return (
        <div className="app-about">
            <div className="container">
                <div className="app-about-wrapper">

                    <TopBlock textContent={"My personal story"}/>

                    <TitleSection textContent={"About Me"}/>


                    <div className="app-about-info">

                        <div className="app-about-info__image">
                            <img src={AboutMePhoto} alt="My Photo" />
                        </div>

                        <div className="app-about-info__block">
                            <p className="app-about-info__text">
                                I am a dedicated Software Engineering student at Ton Duc Thang
                                University with a deep passion for building efficient and user-friendly
                                web solutions. My journey into programming started with a curiosity to
                                understand how things work, and it has grown into a drive to create
                                meaningful applications.
                            </p>
                            <p className="app-about-info__text">
                                I enjoy tackling challenging problems and continuously expanding my
                                skill set in the ever-evolving world of technology. From developing full-
                                stack e-commerce platforms to creating fun, interactive web apps, my
                                goal is to leverage my technical abilities to build impactful products.
                            </p>

                            <ul className="app-about-info__content">
                                <li className="app-about-info__item">
                                    <h5>Name</h5>
                                    <p>Gulaev Kirill</p>
                                </li>
                                <li className="app-about-info__item">
                                    <h5>Email</h5>
                                    <p>gulaevkirill899@gmail.com</p>
                                </li>
                                <li className="app-about-info__item">
                                    <h5>Location</h5>
                                    <p>Russian, Krasnodarskiy kray, Anapa</p>
                                </li>
                                <li className="app-about-info__item">
                                    <h5>Availability</h5>
                                    <p>Open to Internship</p>
                                </li>
                               
                                <li className="app-about-info__button">
                                    <button> 
                                        <p>Download Resume</p>
                                        <Download color="white" />
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}