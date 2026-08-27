import { Play, Pause, Volume2 } from "lucide-react";
import "./MusicTemplate.scss";

interface IMusicTemplate {
    PrewievSound: string;
    nameMusic: string;
    teamMusic: string;
    isActive?: boolean;
    onPlay?: () => void;
}

export const MusicTemplate = ({ PrewievSound, nameMusic, teamMusic, isActive, onPlay }: IMusicTemplate) => {
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
                <div onClick={onPlay}>
                    {isActive ? (
                        <Pause color="#fff" />
                    ) : (
                        <Play color="#a1a1a1" />
                    )}
                </div>
                <Volume2 color="#a1a1a1" />
            </div>
        </div>
    );
};