import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { useContext } from "react";
import { BlogContext } from "../../Context/blogcontext";
import "../LatestArticles/latestarticles.css"
import Toppost from "../TopPosts/toppost";

export default function Fitness(){
    const blogdetails = useContext(BlogContext);
    const latestarticles = blogdetails.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    })
    return(
        <>
        <Navbar/>
        <div className="latest-main">
            <p className="main-title">Latest Articles</p>
            <hr className="main-hr"/>
            <div className="latest-flexbox">
                <div className="comp-div">
                    {
                        latestarticles.filter(value=>value.category==="Technology").map((item)=>(
                            <div>
                                <hr/>
                                <div className="comp-flex">
                    
                                <img src={item.img1} className="img-div1" alt=""/>
                    
                            <div className="comp-desc">
                                <NavLink to={`/${item.category}/${item.id}`}>
                                    <p className="comp-title">{item.title}</p>
                                </NavLink>
                                <p className="comp-description">{item.description}</p>
                            <p className="comp-category"><span className="comp-travel">{item.category}</span> / {item.date}</p>
                            </div>
                            </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="advert">
                    Advertisement
                </div>
            </div>
        </div>
        <Toppost/>
        
        </>
    )
}
