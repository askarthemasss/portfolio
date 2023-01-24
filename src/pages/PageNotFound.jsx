import { Link } from "react-router-dom";
import img from "../images/404-Error.gif"

const PageNotFound = () => {
    return ( 
        <div className="container-404">
            <img src={img} alt="404 - Error: Page not found!!" />
            <span>Back to <Link to="/">Home</Link></span>
        </div>
     );
}
 
export default PageNotFound;