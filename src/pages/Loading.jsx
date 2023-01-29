import loadingImage from "../images/Fast loading.gif"

const Loading = () => {
    return ( 
        <div className="loading-container">
            <img src={loadingImage} alt="loading representation" />
        </div>
     );
}
 
export default Loading;