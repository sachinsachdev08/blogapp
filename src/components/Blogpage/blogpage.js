import { withRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { BlogContext } from "../../Context/blogcontext";
import Navbar from "../Navbar/navbar";
import "./blogpage.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import userImage from "./user.png"
import { FacebookShareButton , TwitterShareButton ,TwitterIcon } from "react-share";
import { FacebookIcon } from "react-share"
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share"


function BlogPage(props){
    const blogdetails = useContext(BlogContext)
    const { match } = props;
    const [showShare,setshowShare] = useState(false)
    const category = match.params.category;
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
       <div>
           <Navbar/>
           
           <div className="blog-main">
           {
               blogdetails.filter(value=>value.category===category && value.likes>0).map((item)=>(
                    <>
                    <p className="blog-title">{item.title}</p>
                    <p className="blog-description"> {item.description} </p>
                    <img className="blog-image" src={item.img1} alt="blog"/>
                    <p className="blog-para">{item.paragraph}</p>
                    <img className="blog-image" src={item.img2} alt="blog" />
                    
                    <div className="blog-likes">
                        <div> <ThumbUpAltIcon/> </div>
                        <p> {item.likes} Likes</p>
                        <div className="share" onClick={()=>setshowShare(!showShare)}> <ShareIcon/>  </div>
                        <p>Share this article</p>
                        {
                            (showShare) && (
                                <div className="share-buttons">
                                <FacebookShareButton url={`https://blogapp.netlify.app/${item.category}/${item.title}`}
                                 quote={`Checkout this blog on ${item.title}`}
                                 hashtag={item.tags.map((value)=>"#"+value)}
                                 >
                                    <FacebookIcon size= {30} round={true} logoFillColor="white" style={{marginRight:'5px', marginLeft:'5px'}} ></FacebookIcon>
                                </FacebookShareButton>
                                <WhatsappShareButton url={`https://blogapp.netlify.app/${item.category}/${item.title}`}
                                title={item.title}
                                >
                                   <WhatsappIcon size= {30} round={true} logoFillColor="white" ></WhatsappIcon>
                               </WhatsappShareButton>
                               <TwitterShareButton url={`https://blogapp.netlify.app/${item.category}/${item.title}`}
                                 title={`Checkout this blog on ${item.title}`}
                                 hashtags={item.tags.map((value)=>"#"+value)}
                                 >
                                    <TwitterIcon size= {30} round={true} logoFillColor="white" style={{marginRight:'5px', marginLeft:'5px'}} ></TwitterIcon>
                                </TwitterShareButton>
                               </div>
                            )
                        }
                    </div>
                    <div className="tag-flex">
                        <p className="tags"> {item.tags[0]} </p>
                        <p className="tags"> {item.tags[1]} </p>
                        <p className="tags"> {item.tags[2]} </p>
                    </div>
                    <div className="user-flex">
                        <img className="user" src={userImage} alt="blog"/>
                        <div>
                            <p className="username">Author: {item.user} </p>
                            <p className="details1">Published on {item.date} </p>
                            <p className="details1">Student</p>
                            <p className="details1">On Siren since {item.joined} </p>
                        </div>
                        
                    </div>
                    </>
                   
               ))
           }
           </div>
       </div>
    )
}

export default withRouter(BlogPage)