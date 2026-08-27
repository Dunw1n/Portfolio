import { ArrowRight } from "lucide-react";
import "./BlogItem.scss";




interface IBlogItem {
    ImageBlog: string;
    stacks: string[];
    titleBlog: string;
    descrBlog: string;
    linkBlog: string;
}


export const BlogItem = ({ ImageBlog, stacks, titleBlog, descrBlog, linkBlog }: IBlogItem) => {
    return (
        <li className="app-blog-item">
            <img src={ImageBlog} alt="" className="app-blog-item__img"/>

            <div className="app-blog-item__stack">
                {stacks.map((item, index) => {
                    return (
                        <span key={index} className="app-blog-item__stack_text">{item}</span>
                    )
                })}
            </div>

            <h3 className="app-blog-item__title">
                {titleBlog}
            </h3>

            <p className="app-blog-item__descr">
                {descrBlog}
            </p>

            <a href={linkBlog} className="app-blog-item__link">
                <p className="app-blog-item__link_text">Читать подробнее </p>
                <ArrowRight color="#ffffff" size={20}/>
            </a>
        </li>
    )
}