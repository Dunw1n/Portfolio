import "./AboutMe.scss";

import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"
import { Download } from "lucide-react";


import AboutMePhoto from "../../assets/about-me-photo.jpg";
import { AboutItem } from "../../widgets/AboutItem/AboutItem";
import { AboutText } from "../../widgets/AboutText/AboutText";

export const AboutMe = () => {
    return (
        <div className="app-about">
            <div className="container">
                <div className="app-about-wrapper section-wrapper">

                    <TopBlock textContent={"My personal story"}/>

                    <TitleSection textContent={"About Me"}/>


                    <div className="app-about-info">

                        <div className="app-about-info__image">
                            <img src={AboutMePhoto} alt="My Photo" />
                        </div>

                        <div className="app-about-info__block">

                            <AboutText 
                                textOne={"I am a dedicated Software Engineering student at Ton Duc Thang University with a deep passion for building efficient and user-friendly web solutions. My journey into programming started with a curiosity to understand how things work, and it has grown into a drive to create meaningful applications."} 
                                textTwo={" I enjoy tackling challenging problems and continuously expanding my skill set in the ever-evolving world of technology. From developing full-stack e-commerce platforms to creating fun, interactive web apps, my goal is to leverage my technical abilities to build impactful products."}
                            />
                        
                            <ul className="app-about-info__content">
                                <AboutItem label={"Name"} content={"Gulaev Kirill"}/>
                                <AboutItem label={"Email"} content={"gulaevkirill899@gmail.com"}/>
                                <AboutItem label={"Location"} content={"Russian, Krasnodarskiy kray, Anapa"}/>
                                <AboutItem label={"Availability"} content={"Open to Internship"}/>
                               
                               
                                <li className="app-about-info__button">
                                    <button> 
                                        <p>Download Resume</p>
                                        <Download color="#fff" />
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