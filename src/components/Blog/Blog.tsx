import { TitleSection } from "../../widgets/TitleSection/TitleSection"
import { TopBlock } from "../../widgets/TopBlock/TopBlock"
import ImageBlog from "../../assets/about-me-photo.jpg";


import "./Blog.scss";
import { BlogItem } from "../../widgets/BlogItem/BlogItem";

export const Blog = () => {
    return (
        <div className="app-blog">
            <div className="container">

                <div className="app-blog-wrapper section-wrapper">
                        <TopBlock textContent={"Sharing my knowledge"}/>
                        <TitleSection textContent={"From The Blog"}/>


                        <ul className="app-blog-list">
                            <BlogItem 
                                ImageBlog={ImageBlog} 
                                stacks={['Unity', 'Game Dev']} 
                                titleBlog={"Guide: Using Mixamo Assets in Unity"} 
                                descrBlog={"A standard workflow to correctly download and implement 3D character sand animations from Mixamo into your Unity projects."} 
                                linkBlog={"#"}
                            />
                          
                            <BlogItem 
                                ImageBlog={ImageBlog} 
                                stacks={['Unity', 'Game Dev']} 
                                titleBlog={"Guide: Using Mixamo Assets in Unity"} 
                                descrBlog={"A standard workflow to correctly download and implement 3D character sand animations from Mixamo into your Unity projects."} 
                                linkBlog={"#"}
                            />
                          
                            <BlogItem 
                                ImageBlog={ImageBlog} 
                                stacks={['Unity', 'Game Dev', 'CMS Wordpress']} 
                                titleBlog={"Guide: Using Mixamo Assets in Unity"} 
                                descrBlog={"A standard workflow to correctly download and implement 3D character sand animations from Mixamo into your Unity projects."} 
                                linkBlog={"#"}
                            />
                          
                        </ul>
                </div>

            </div>
        </div>
    )
}