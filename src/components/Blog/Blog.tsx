import { TitleSection } from "@widgets/TitleSection/TitleSection"
import { TopBlock } from "@widgets/TopBlock/TopBlock"
import ImageBlog from "@assets/about-me-photo.jpg";


import "./Blog.scss";
import { BlogItem } from "@widgets/BlogItem/BlogItem";

export const Blog = () => {
    return (
        <div className="app-blog">
            <div className="container">

                <div className="app-blog-wrapper section-wrapper">
                        <TopBlock textContent={"Поделюсь новостями и знаниями"}/>
                        <TitleSection textContent={"Мой блог"}/>


                        <ul className="app-blog-list">
                            <BlogItem 
                                ImageBlog={ImageBlog} 
                                stacks={['JavaScript', 'Web Dev']} 
                                titleBlog={"Гайд: Как правильно настроить Webpack"} 
                                descrBlog={"A standard workflow to correctly download and implement 3D character sand animations from Mixamo into your Unity projects."} 
                                linkBlog={"#"}
                            />
                          
                            <BlogItem 
                                ImageBlog={ImageBlog} 
                                stacks={['Media Query', 'CSS', 'HTML5']} 
                                titleBlog={"Адаптация сайта по разные устройства"} 
                                descrBlog={"A standard workflow to correctly download and implement 3D character sand animations from Mixamo into your Unity projects."} 
                                linkBlog={"#"}
                            />
                          
                            <BlogItem 
                                ImageBlog={ImageBlog} 
                                stacks={['Git', 'Github', 'Team Works']} 
                                titleBlog={"Разработка в команде и Git репозитории"} 
                                descrBlog={"A standard workflow to correctly download and implement 3D character sand animations from Mixamo into your Unity projects."} 
                                linkBlog={"#"}
                            />
                          
                        </ul>
                </div>

            </div>
        </div>
    )
}