import { ArrowRight } from "lucide-react";
import "./ContentMain.scss";

export const ContentMain = () => {
    return (
        <>
            <div className="app-welcome-title">
                <h1 className="app-welcome-title__text">
                    Building Digital
                    <span>Experiences</span>
                </h1>
            </div>

            <p className="app-welcome-descr">
                A passionate Software Engineering student specializing in
                creating efficient, user-centric web applications.
            </p>


            <div className="app-welcome-btn">
                <button className="app-welcome-btn__click one-button">
                    <p>View my projects</p>
                    <ArrowRight />
                </button>

                <button className="app-welcome-btn__click two-button">
                    <p>Get in touch</p>
                </button>
            </div>


        </>
       
    )
}