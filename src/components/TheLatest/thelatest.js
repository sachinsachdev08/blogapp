import React from "react";
import { useContext } from "react/cjs/react.development";
import { BlogContext } from "../../Context/blogcontext";
import "./thelatest.css"
import { NavLink } from "react-router-dom";
export default function Thelatest(){
    const details = useContext(BlogContext)
    return(
        <div className="thelatest-main">
            <p className="main-title">The Latest</p>
            <hr className="main-hr"/>
            <div className="thelatest-flexbox">
              {
                  details.slice(0,3).map((item)=>(
                    <div className="thelatest-div">
                    <div >
                        <img src={item.img1} className="img-div" alt=""/>
                    </div>
                    <div className="blog-desp">
                        <NavLink to={`${item.category}/${item.title}`} exact>
                        <p className="title1">{item.title}</p>
                        </NavLink>
                        <p className="description">{item.description} </p>
                        <p className="category"><span className="travel">{item.category}</span> / {item.date}</p>
                    </div>
                    </div>
                  ))
              }
            </div>
        </div>
    )
}