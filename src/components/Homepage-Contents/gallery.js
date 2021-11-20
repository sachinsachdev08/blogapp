import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { BlogContext } from "../../Context/blogcontext";
import Thelatest from "../TheLatest/thelatest";
import "./gallery.css"


export default function Gallery() {
    const details = useContext(BlogContext);
    const details1 = details.filter(value=>value.id===5 && value.likes>0);
    const details2 = details.filter(value=>value.id===1 && value.likes>0);
    const details3 = details.filter(value=>value.id===4 && value.likes>0);

    console.log(details1)
    return(
        <>
        <div className="gallery-main">
            <div>
                <NavLink to={`/${details1[0].category}/${details1[0].title}`}><img src={details1[0].img1} className="gallery-1" alt="blog"/></NavLink>
            </div>
            <div className="gallery-2">
                <div>
                    <NavLink to={`/${details2[0].category}/${details2[0].title}`}><img className="img-2" src={details2[0].img1} alt="blog" /></NavLink>
                </div>
                <div>
                   <NavLink to={`/${details3[0].category}/${details3[0].title}`}> <img className="img-3" src={details3[0].img1} alt="blog" /></NavLink>
                </div>
            </div>

            
            
        </div>
        <Thelatest/>
        
        </>
    )
}