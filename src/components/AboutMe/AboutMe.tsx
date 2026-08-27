

import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"
import { Download } from "lucide-react";


import AboutMePhoto from "../../assets/about-me-photo.jpg";
import { AboutItem } from "../../widgets/AboutItem/AboutItem";
import { AboutText } from "../../widgets/AboutText/AboutText";

import "./AboutMe.scss";

export const AboutMe = () => {
    return (
        <div className="app-about">
            <div className="container">
                <div className="app-about-wrapper section-wrapper">

                    <TopBlock textContent={"Моя личная история"}/>

                    <TitleSection textContent={"Обо мне"}/>


                    <div className="app-about-info">

                        <div className="app-about-info__image">
                            <img src={AboutMePhoto} alt="My Photo" />
                        </div>

                        <div className="app-about-info__block">

                            <AboutText 
                                textOne={"Я учусь на факультете разработки программного обеспечения и очень увлечен созданием эффективных и удобных веб-решений. Мое увлечение программированием началось с желания понять, как все устроено, и переросло в стремление создавать полезные приложения."} 
                                textTwo={"Мне нравится решать сложные задачи и постоянно совершенствовать свои навыки в постоянно развивающемся мире технологий. Моя цель — использовать свои технические способности для создания эффективных продуктов, будь то разработка полнофункциональных платформ для электронной коммерции или создание увлекательных интерактивных веб-приложений."}
                            />
                        
                            <ul className="app-about-info__content">
                                <AboutItem label={"Мое имя"} content={"Гуляев Кирилл"}/>
                                <AboutItem label={"Моя почта"} content={"gulaevkirill899@gmail.com"}/>
                                <AboutItem label={"Нахожусь"} content={"Краснодарский края, Анапа"}/>
                                <AboutItem label={"Статус"} content={"В поиске вакансии"}/>
                               
                               
                                <li className="app-about-info__button">
                                    <button> 
                                        <p>Скачать резюме</p>
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