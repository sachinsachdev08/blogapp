import { useContext } from "react";
import "./top.css"
import { NavLink } from "react-router-dom";
import { BlogContext } from "../../Context/blogcontext";
import { useState } from "react";

export default function Toppost(){
    const details = useContext(BlogContext)
    const sorteddetails = details.sort(function(a,b){
        return (b.likes) - (a.likes)
    })
    console.log(sorteddetails)
    const [showMore,setshowMore] = useState(false)
    return(
        <div className="top-main">
            <p className="top-title">Top Post</p>
            <hr className="top-hr"/>
            <div className="top-flexbox">
              {
                  sorteddetails.slice(0,3).map((item)=>(
                    <div className="top-div">
                    <div >
                        <img src={item.img1} className="img-div" alt=""/>
                    </div>
                    <div className="blog-desp">
                        <NavLink to={`${item.category}/${item.title}`} exact>
                        <p className="title1">{item.title}</p>
                        </NavLink>
                        <p className="description">{item.description} </p>
                        <p className="category"><span className="travel">{item.category}</span> / {item.date}/ Likes - <span className="likes">{item.likes}</span></p>
                    </div>
                    </div>
                  ))
              }
              {
                  (showMore) && (
                    details.slice(3,5).map((item)=>(
                        <div className="top-div">
                        <div >
                            <img src={item.img1} className="img-div" alt=""/>
                        </div>
                        <div className="blog-desp">
                            <NavLink to={`${item.category}/${item.title}`} exact>
                            <p className="title1">{item.title}</p>
                            </NavLink>
                            <p className="description">{item.description} </p>
                            <p className="category"><span className="travel">{item.category}</span> / {item.date}/ Likes - <span className="likes">{item.likes}</span></p>
                        </div>
                        </div>
                      ))
                  )
              }
            
            </div>
            {
                showMore?(<button className="top-button" onClick={()=>setshowMore(false)}>Load less</button>):(<button className="top-button" onClick={()=>setshowMore(true)}>Load More</button>)
            }
        </div>
    )
}
