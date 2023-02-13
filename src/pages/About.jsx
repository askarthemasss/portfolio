import SocialLinks from "./SocialLinks";
import Resume from "../documents/Resume.pdf"
import Image from "../documents/askar-profile.jpeg"
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiMysql, SiSpring, SiSpringboot } from "react-icons/si";

const About = () => {
    return ( 
        <>
            <div className="about-me-main">
                <div className="about-me-left">
                    <h1>I'm Askar</h1>
                    <p className="about-me-bio">
                        ‣ A Professional, Self-taught Software Developer (specializing in React Applications)
                        with almost 2 Years of Industrial Experience. Worked on SaaS customization and
                        Implementations.
                        <br /><br />
                        ‣ I don't limit myself within a particular tech stack, I'm more of a Problem Solver.
                        I learnt (and still learning) what the problem requires to solve.
                        <br /><br />
                        ‣ View My <a href={Resume}>Resume</a>.
                    </p>
                    <div className="tech-stack">
                        <p>‣ Tech I'm currently using:</p><br />
                        <ul>
                            <li title="HTML"><FaHtml5 size={25}/></li>
                            <li title="CSS"><FaCss3Alt size={25}/></li>
                            <li title="JavaScript"><SiJavascript size={25}/></li>
                            <li title="React.js"><FaReact size={25}/></li>
                            <li title="node.js"><FaNodeJs size={25}/></li>
                            <li title="Java"><FaJava size={25}/></li>
                            <li title="Spring"><SiSpring size={25}/></li>
                            <li title="Spring Boot"><SiSpringboot size={25}/></li>
                            <li title="MySQL"><SiMysql size={25}/></li>
                        </ul>
                    </div>
                    <br /><br />
                    <ul>
                        <li>Add services - zoho, low-code, Frontend,...</li>
                        <li>Add Tech stack</li>
                        <li>Try adding github stats</li>
                    </ul>
                </div>
                <div className="about-me-right">
                    <img className="profile-image" src={Image} alt="My Profile" />
                </div>
            </div>
            <div className="about-me-footer">
                <SocialLinks gap={"3rem"} />
            </div>
        </>
     );
}
 
export default About;