import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import entranceGif from "../images/404-Error-entrance.gif"
import floatingGif from "../images/404-Error-floating.gif"

const PageNotFound = () => {
    // Two Gifs, one for entrance animation, another on for floating animation
    // at first, entrance animation gif will be loaded
    const [image, setImage] = useState(entranceGif)

    useEffect(()=> {
        // After 1 sec change the gif to floating animation
        setTimeout(()=>{
            setImage(floatingGif);
        },1000)
    },[])

    return ( 
        <div className="container-404">
            <img src={image} alt="404 - Error: Page not found!!" />
            <span>Back to <Link to="/">Home</Link></span>
        </div>
     );
}
 
export default PageNotFound;