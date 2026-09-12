import { Link, useLocation } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => {
    const location = useLocation();


    return (
        <div className="app-notfound">
            <div className="container">

                <div className="app-notfound-wrapper">
                    <h2>404</h2>
                    <h4>Страница по адресу "{location.pathname}", не найдена</h4>
                    <p>Возможно эта страница устарела и была удалена, пожайлуста перейдите по правильной ссылке</p>
                    <Link to="/">Перейти на главную</Link>
                </div>

            </div>
        </div>
    )
}