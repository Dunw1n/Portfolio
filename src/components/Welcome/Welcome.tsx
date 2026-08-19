import { InfoMe } from "@widgets/InfoMe/InfoMe"
import { MusicTemplate } from "@widgets/MusicTemplate/MusicTemplate";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import { Animation } from "../Animation/Animation";
import { ContentMain } from "@widgets/ContentMain/ContentMain";

import "./Welcome.scss";


export const Welcome = () => {
    return (
         <div className="app-welcome">
            <div className="container">
                <div className="app-welcome-wrapper">
                    <div className="app-welcome-widget">

                        <InfoMe/>
                        <MusicTemplate nameMusic={"Jeangle Bans"} teamMusic={"Arrow teams"}/>
                        <MusicTemplate nameMusic={"Jeangle Bans"} teamMusic={"Arrow teams"}/>

                    </div>

                    <div className="app-welcome-text">
                        <TopBlock textContent={"Добро пожаловать"}/>
                        <ContentMain/>
                    </div>
                </div>
            </div>

            <Animation/>
        </div>
    )
}