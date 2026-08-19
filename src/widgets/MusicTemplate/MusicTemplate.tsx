import { Play, Volume2 } from "lucide-react";
import PrewievSound from "@assets/main-section/PreviewSound.png";
import "./MusicTemplate.scss";


interface IMusicTemplate {
    nameMusic: string;
    teamMusic: string;
}


export const MusicTemplate = ({ nameMusic, teamMusic }: IMusicTemplate) => {
    return (
        <div className="app-welcome-musicBar structure-class">
            <div className="app-welcome-musicBar__content">
                <img src={PrewievSound} alt="" />
                <div className="app-welcome-musicBar__text">
                    <h4>{nameMusic}</h4>
                    <p>{teamMusic}</p>
                </div>
            </div>
            <div className="app-welcome-musicBar__management">
                <Play color="#a1a1a1"/>
                <Volume2 color="#a1a1a1"/>
            </div>
        </div>
    )
}