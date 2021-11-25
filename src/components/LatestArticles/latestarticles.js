import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { BlogContext } from "../../Context/blogcontext";
import "./latestarticles.css"


export default function Latestarticles(){
    const blogdetails = useContext(BlogContext);
    const latestarticles = blogdetails.slice(0,5).sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    })
    const [showMore,setshowMore] = useState(false)
    return(
        <div className="latest-main">
            <p className="main-title">Latest Articles</p>
            <hr className="main-hr"/>
            <div className="latest-flexbox">
                <div className="comp-div">
                    {
                        latestarticles.slice(0,4).map((item)=>(
                            <div key={item.id}>
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
                    {
                        (showMore) && (
                            latestarticles.slice(4,6).map((item)=>(
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
                        )
                    }
                    {
                        showMore?(<button className="showmore"  onClick={()=>setshowMore(false)}>Load less</button>):(<button className="showmore" onClick={()=>setshowMore(true)}>Load More</button>)
                    }
                </div>
                <div className="advert">
                    Advertisement
                </div>
            </div>
        </div>
    )
}