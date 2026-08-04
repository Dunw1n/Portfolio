import { ArrowRight } from "lucide-react"
import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"


import ImageBlog from "../../assets/about-me-photo.jpg";
import "./Blog.scss";

export const Blog = () => {
    return (
        <div className="app-blog">
            <div className="container">

                <div className="app-blog-wrapper">
                        <TopBlock textContent={"Sharing my knowledge"}/>
                        <TitleSection textContent={"From The Blog (Maintenance)"}/>


                        <ul className="app-blog-list">
                            <li className="app-blog-item">
                                <img src={ImageBlog} alt="" className="app-blog-item__img"/>

                                <div className="app-blog-item__stack">
                                    <span className="app-blog-item__stack_text">Unity</span>
                                    <span className="app-blog-item__stack_text">Game Dev</span>
                                </div>

                                <h3 className="app-blog-item__title">
                                    Guide: Using Mixamo Assets in Unity
                                </h3>

                                <p className="app-blog-item__descr">
                                    A standard workflow to correctly
                                    download and implement 3D characters
                                    and animations from Mixamo into your
                                    Unity projects.
                                </p>

                                <a href="#" className="app-blog-item__link">
                                    <p className="app-blog-item__link_text">Read More </p>
                                    <ArrowRight color="#ffffff" size={20}/>
                                </a>
                            </li>
                            <li className="app-blog-item">
                                <img src={ImageBlog} alt="" className="app-blog-item__img"/>

                                <div className="app-blog-item__stack">
                                    <span className="app-blog-item__stack_text">Unity</span>
                                    <span className="app-blog-item__stack_text">Game Dev</span>
                                </div>

                                <h3 className="app-blog-item__title">
                                    Guide: Using Mixamo Assets in Unity
                                </h3>

                                <p className="app-blog-item__descr">
                                    A standard workflow to correctly
                                    download and implement 3D characters
                                    and animations from Mixamo into your
                                    Unity projects.
                                </p>

                                <a href="#" className="app-blog-item__link">
                                    <p className="app-blog-item__link_text">Read More </p>
                                    <ArrowRight color="#ffffff" size={20}/>
                                </a>
                            </li>
                            <li className="app-blog-item">
                                <img src={ImageBlog} alt="" className="app-blog-item__img"/>

                                <div className="app-blog-item__stack">
                                    <span className="app-blog-item__stack_text">Unity</span>
                                    <span className="app-blog-item__stack_text">Game Dev</span>
                                </div>

                                <h3 className="app-blog-item__title">
                                    Guide: Using Mixamo Assets in Unity
                                </h3>

                                <p className="app-blog-item__descr">
                                    A standard workflow to correctly
                                    download and implement 3D characters
                                    and animations from Mixamo into your
                                    Unity projects.
                                </p>

                                <a href="#" className="app-blog-item__link">
                                    <p className="app-blog-item__link_text">Read More </p>
                                    <ArrowRight color="#ffffff" size={20}/>
                                </a>
                            </li>
                        </ul>
                </div>

            </div>
        </div>
    )
}