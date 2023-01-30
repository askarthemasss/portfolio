// import codeTyping from "../images/Code-typing.gif"
import codeTypingEntrance from "../images/Code-typing-entrance.gif"
import codeTypingLooping from "../images/Code-typing-looping.gif"
import { useEffect, useState } from "react"
// import Loading from "./Loading"

const Home = () => {
    // Two Gifs, one for entrance animation, another on for floating animation
    // at first, entrance animation gif will be loaded
    const [image, setImage] = useState(codeTypingEntrance)
    // const [loading, setLoading] = useState(true)

    useEffect(()=> {
        // setLoading(false)
        // After 0.7 sec change the gif to floating animation
        setTimeout(()=>{
            setImage(codeTypingLooping);
        },700)
    },[])

    // if (loading) {
    //     return( <Loading />)
    // }
    return ( 
        <>
            <div className="home-container">
                {/* <h1>Home Page</h1> */}
                <div className="left-home">
                    <h3>Hi, I'm Askar</h3>
                    {/* <p>Frontend Developer | Low-Code</p> */}
                    <p>Professional Software developer with more than a year of experience in: </p>
                    <ul>
                        <li>Developing Frontend</li>
                        <li>Customizing and Implementing SaaS Products</li>
                        <li>Low-Code Development</li>
                    </ul>
                    <a  className="about-me-button" href="/about"><span>About Me</span></a>
                </div>
                <div className="right-home">
                    <img src={image} alt="code-typing-illustration" />
                </div>
                <div className="animated-gif"></div>
            </div>
            <a href="https://storyset.com/work" target="_blank" rel="noreferrer">Work illustrations by Storyset</a>
        </>
    );
    }

export default Home;